import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-relatorios',
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent implements OnInit {
  filtros = {
    aluno: '',
    curso: '',
    professor: '',
    diaSemana: '',
    statusContrato: '',
    situacaoContrato: '',
    motivoSuspensao: '',
    bairro: '',
    endereco: '',
    rua: '',
    dataInicioAulas: '',
    dataInscricao: ''
  };

  // Dados para selects
  alunos = [];

  cursos = [];

  professores = [];

  todasColunas = [
    { campo: 'aluno', nome: 'Aluno', visivel: true },
    { campo: 'responsavel', nome: 'Responsável', visivel: true },
    { campo: 'curso', nome: 'Curso', visivel: true },
    { campo: 'professor', nome: 'Professor', visivel: true },
    { campo: 'diaAula', nome: 'Dia da Aula', visivel: true },
    { campo: 'statusContrato', nome: 'Status Contrato', visivel: true },
    { campo: 'situacaoContrato', nome: 'Situação Contrato', visivel: true },
    { campo: 'motivoSuspensao', nome: 'Motivo Suspensão', visivel: false },
    { campo: 'bairro', nome: 'Bairro', visivel: false },
    { campo: 'endereco', nome: 'Endereço', visivel: false },
    { campo: 'rua', nome: 'Rua', visivel: false },
    { campo: 'dataInicioAulas', nome: 'Data Início Aulas', visivel: true },
    { campo: 'dataInscricao', nome: 'Data Inscrição', visivel: true },
    { campo: 'telefone', nome: 'Telefone', visivel: false },
    { campo: 'email', nome: 'Email', visivel: false }
  ];

  resultados: any[] = [];
  limiteRegistros = 1000;

  ngOnInit(): void {
  }

  get colunasVisiveis() {
    return this.todasColunas.filter(col => col.visivel);
  }

  gerarRelatorio(): void {
    console.log('Filtros aplicados:', this.filtros);
    
    this.resultados = this.mockDadosRelatorio();
  }

  private mockDadosRelatorio(): any[] {
    const mockData = [];
    const count = Math.floor(Math.random() * 500) + 100; // 100-600 registros
    
    for (let i = 0; i < count; i++) {
      mockData.push({
        aluno: `Aluno ${i + 1}`,
        responsavel: `Responsável ${i + 1}`,
        curso: this.filtros.curso || `Curso ${Math.floor(Math.random() * 5) + 1}`,
        professor: this.filtros.professor || `Professor ${Math.floor(Math.random() * 3) + 1}`,
        diaAula: this.filtros.diaSemana || ['segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'][Math.floor(Math.random() * 6)],
        statusContrato: this.filtros.statusContrato || ['ativo', 'inativo', 'pendente', 'suspenso'][Math.floor(Math.random() * 4)],
        situacaoContrato: this.filtros.situacaoContrato || ['em_dia', 'vencido', 'cancelado'][Math.floor(Math.random() * 3)],
        motivoSuspensao: this.filtros.motivoSuspensao || ['ausencia', 'inadimplencia', 'solicitacao', 'outros'][Math.floor(Math.random() * 4)],
        bairro: this.filtros.bairro || `Bairro ${Math.floor(Math.random() * 10) + 1}`,
        endereco: this.filtros.endereco || `Endereço ${i + 1}`,
        rua: this.filtros.rua || `Rua ${Math.floor(Math.random() * 20) + 1}`,
        dataInicioAulas: this.filtros.dataInicioAulas || new Date(Date.now() - Math.floor(Math.random() * 31536000000)).toISOString().split('T')[0],
        dataInscricao: this.filtros.dataInscricao || new Date(Date.now() - Math.floor(Math.random() * 63072000000)).toISOString().split('T')[0],
        telefone: `(11) 9${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
        email: `aluno${i + 1}@email.com`
      });
    }
    
    return mockData;
  }

  exportarParaExcel(): void {
    const dadosExportar = this.resultados.map(item => {
      const obj: any = {};
      this.colunasVisiveis.forEach(col => {
        obj[col.nome] = item[col.campo];
      });
      return obj;
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dadosExportar);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Relatorio');
    XLSX.writeFile(wb, 'relatorio.xlsx');
  }

  exportarParaCSV(): void {
    const dadosExportar = this.resultados.map(item => {
      const obj: any = {};
      this.colunasVisiveis.forEach(col => {
        obj[col.nome] = item[col.campo];
      });
      return obj;
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dadosExportar);
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'relatorio.csv';
    link.click();
  }

getCellClass(item: any, campo: string): string {
  const classes = ['cell-content'];
  
  if (campo === 'statusContrato' || campo === 'situacaoContrato') {
    return classes.join(' ');
  }
  
  if (item.statusContrato === 'suspenso' && ['aluno', 'curso'].includes(campo)) {
    classes.push('warning');
  }
  
  return classes.join(' ');
}

getStatusIcon(status: string): string {
  const icons: {[key: string]: string} = {
    'ativo': 'fas fa-check-circle',
    'inativo': 'fas fa-times-circle',
    'suspenso': 'fas fa-exclamation-circle'
  };
  return icons[status] || 'fas fa-circle';
}

getStatusText(status: string): string {
  const texts: {[key: string]: string} = {
    'ativo': 'Ativo',
    'inativo': 'Inativo',
    'suspenso': 'Suspenso'
  };
  return texts[status] || status;
}

getSituacaoText(situacao: string): string {
  const texts: {[key: string]: string} = {
    'em_dia': 'Em dia',
    'vencido': 'Vencido',
    'cancelado': 'Cancelado'
  };
  return texts[situacao] || situacao;
}

ordenarPor(campo: string): void {
  console.log('Ordenar por:', campo);
}
}