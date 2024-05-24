import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clienteinfo',
  templateUrl: './clienteinfo.component.html',
  styleUrls: ['./clienteinfo.component.scss'],
  standalone: true,
  imports: [RouterLink, FormsModule],
})
export class ClienteinfoComponent implements OnInit {
  cliente: Cliente = new Cliente();
  clienteService = inject(ClienteService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    console.log('ID do cliente:', id);
    this.findById(id);
  }

  findById(id: number): void {
    this.clienteService.findById(id).subscribe({
      next: retorno => {
        this.cliente = retorno;
        console.log('Dados do cliente recebidos:', retorno);
      },
      error: erro => {
        Swal.fire({
          title: 'Falha ao carregar lista de apartamentos',
          icon: 'error',
          showConfirmButton: false,
          timer: 1500
        });
        console.log('Erro ao carregar informações do cliente:', erro);
      }
    });
  }
}
