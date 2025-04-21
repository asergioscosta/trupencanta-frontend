import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './buscar/buscar.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { CadastrarContratoComponent } from './cadastrar-contrato/cadastrar-contrato.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';
import { CadastrarResponsavelComponent } from './cadastrar-responsavel/cadastrar-responsavel.component';
import { CadastrarTurmaComponent } from './cadastrar-turma/cadastrar-turma.component';
import { ConsultarContratoComponent } from './consultar-contrato/consultar-contrato.component';
import { EditarContratoComponent } from './editar-contrato/editar-contrato.component';
import { LoginComponent } from './login/login.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { SuspenderContratoComponent } from './suspender-contrato/suspender-contrato.component';

const routes: Routes = [
  { path: '', redirectTo: 'paginainicial', pathMatch: 'full' },
  { path: 'buscar', component: BuscarComponent },
  { path: 'cadastrar-aluno', component: CadastrarAlunoComponent },
  { path: 'cadastrar-contrato', component: CadastrarContratoComponent },
  { path: 'cadastrar-cursos', component: CadastrarCursosComponent },
  { path: 'cadastrar-professor', component: CadastrarProfessorComponent },
  { path: 'cadastrar-responsavel', component: CadastrarResponsavelComponent },
  { path: 'cadastrar-turma', component: CadastrarTurmaComponent },
  { path: 'consultar-contrato', component: ConsultarContratoComponent },
  { path: 'editar-contrato', component: EditarContratoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'suspender-contrato', component: SuspenderContratoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }