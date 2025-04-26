import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar-professor',
  templateUrl: './cadastrar-professor.component.html',
  styleUrl: './cadastrar-professor.component.scss'
})
export class CadastrarProfessorComponent {
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  complemento: string = '';
  cidade: string = '';
  uf: string = '';
  numero: string = '';

  constructor(private http: HttpClient) { }

  formatarCep(cep: string): string {
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  }

  buscarCep() {
    if (!this.cep) return;

    this.http.get<any>(`https://brasilapi.com.br/api/cep/v2/${this.cep}`)
      .subscribe({
        next: (data) => {
          this.logradouro = data.street;
          this.bairro = data.neighborhood;
          this.cidade = data.city;
          this.uf = data.state;
          this.cep = this.formatarCep(data.cep);
        },
        error: (err) => {
          alert('Erro ao buscar CEP.');
          console.error(err);
        }
      });
  }

  mostrarResponsavel: boolean = false;
  responsaveisDisponiveis: any[] = [];
  responsavelSelecionado: string = '';

  onResponsavelChange(event: any) {
    this.responsavelSelecionado = event.target.value;
  }
}
