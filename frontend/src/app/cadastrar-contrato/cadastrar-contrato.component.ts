import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-contrato',
  templateUrl: './cadastrar-contrato.component.html',
  styleUrls: ['./cadastrar-contrato.component.scss']
})
export class CadastrarContratoComponent {
  statusContrato: string = 'ATIVO';
  situacaoContrato: string = 'EM_CURSO';

  constructor(private router: Router) { }

  onStatusChange(event: any): void {
    const selectedOption = event.target.options[event.target.selectedIndex];

    if (selectedOption.value === 'SUSPENSO') {
      this.router.navigate(['/suspender-contrato']);
    }
  }
}