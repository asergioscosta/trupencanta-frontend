import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CadastrarContratoComponent } from './cadastrar-contrato/cadastrar-contrato.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { SuspenderContratoComponent } from './suspender-contrato/suspender-contrato.component';

const routes: Routes = [
  { path: "", redirectTo: 'paginainicial', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "cadastrar-contrato", component: CadastrarContratoComponent },
  { path: "cadastrar-cursos", component: CadastrarCursosComponent },
  { path: "suspender-contrato", component: SuspenderContratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
