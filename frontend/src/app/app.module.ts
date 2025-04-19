import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastrarContratoComponent } from './cadastrar-contrato/cadastrar-contrato.component';
import { CadastrarCursosComponent } from './cadastrar-cursos/cadastrar-cursos.component';
import { SuspenderContratoComponent } from './suspender-contrato/suspender-contrato.component';
import { EditarContratoComponent } from './editar-contrato/editar-contrato.component';
import { CadastrarResponsavelComponent } from './cadastrar-responsavel/cadastrar-responsavel.component';
import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastrarContratoComponent,
    CadastrarCursosComponent,
    SuspenderContratoComponent,
    EditarContratoComponent,
    CadastrarResponsavelComponent,
    CadastrarProfessorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
