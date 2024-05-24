import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario!: string;
  senha!: string;

  router = inject(Router);


  logar() {
    if (this.usuario == 'admin' && this.senha == 'admin') {
      this.router.navigate(['admin/principal']);
    } else {
      Swal.fire({
        title: 'Usuário ou senha incorretos!',
        icon: 'error',
        showConfirmButton: false,
        timer: 1200,
        customClass: {
          popup: 'swal2-popup'
        }
      });
    }
  }
}
  
