import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('passwordField') passwordField!: ElementRef<HTMLInputElement>;
  @ViewChild('togglePasswordBtn') togglePasswordBtn!: ElementRef<HTMLButtonElement>;

  hidePassword = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
    this.passwordField.nativeElement.type = this.hidePassword ? 'password' : 'text';
  }

  onSubmit(event: Event): void {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    let dados = {
      duploFator: true,
      ip: ""
    };

    (document.getElementById('extra') as HTMLInputElement).value = JSON.stringify(dados);
    (event.target as HTMLFormElement).submit();
  }

}
