import { Component, inject } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Apartamento } from '../../../models/apartamento';
import { ApartamentoService } from '../../../services/apartamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientedetails',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './clientedetails.component.html',
  styleUrl: './clientedetails.component.scss'
})
export class ClientedetailsComponent {

  apartamentoService = inject(ApartamentoService);
  cliente = new Cliente();
  router = inject(Router);
  clienteService = inject(ClienteService);
  lista: Apartamento [] = [];

  constructor(){
    this.cliente.ap = new Apartamento();
    this.cliente.ap.aparnum = 0;
    this.listAll();
  }

  save() {
    this.clienteService.save(this.cliente).subscribe({
      next: retorno => {
        Swal.fire({
          title: 'Cliente salvo com sucesso!',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/admin/cliente']);
      },
      error: erro => {
        Swal.fire({
          title: 'Erro ao salvar cliente',
          icon: 'error',
          text: 'Informações incompletas',
          showConfirmButton: true
        });
        console.log(erro);
      }
    });
  }
  

  listAll(){
    this.apartamentoService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Erro ao carregar lista de clientes');
        console.log(erro);
      }
    });
  }
  

}
