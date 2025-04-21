import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    CadastrarAlunoComponent,
    CadastrarContratoComponent,
    CadastrarCursosComponent,
    CadastrarProfessorComponent,
    CadastrarResponsavelComponent,
    CadastrarTurmaComponent,
    ConsultarContratoComponent,
    EditarContratoComponent,
    LoginComponent,
    RelatoriosComponent,
    SuspenderContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }