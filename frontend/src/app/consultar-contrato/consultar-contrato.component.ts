import { Component } from '@angular/core';

interface Contrato {
  id: number;
  statusContrato: string;
  situacaoContrato: string;
  dataMatricula: string;
  dataInicioAulas: string;
  responsavel?: string;
  turma: string;
  curso: string;
  professor: string;
}

@Component({
  selector: 'app-consultar-contrato',
  templateUrl: './consultar-contrato.component.html',
  styleUrls: ['./consultar-contrato.component.scss']
})
export class ConsultarContratoComponent {
  aluno = {
    nome: 'Fulano da Silva',
    matricula: '20230001'
  };

  contratos: Contrato[] = [
    {
      id: 1,
      statusContrato: 'Carregando',
      situacaoContrato: 'Carregando',
      dataMatricula: 'Carregando',
      dataInicioAulas: 'Carregando',
      responsavel: 'Carregando',
      turma: 'Carregando',
      curso: 'Carregando',
      professor: 'Carregando'
    },
  ];

  contratoExpandido: number | null = null;

  toggleContrato(id: number): void {
    this.contratoExpandido = this.contratoExpandido === id ? null : id;
  }
}