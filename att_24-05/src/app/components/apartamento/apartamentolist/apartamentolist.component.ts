import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Apartamento } from '../../../models/apartamento';
import { ApartamentoService } from '../../../services/apartamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apartamentolist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apartamentolist.component.html',
  styleUrl: './apartamentolist.component.scss'
})
export class ApartamentolistComponent {
  
  lista: Apartamento[] = [];
  apartamentoService = inject(ApartamentoService);
  router = inject(Router);


  constructor(){
    this.listAll(); 
  }

  listAll(){
    this.apartamentoService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        Swal.fire({
          title: 'Erro ao carregar lista de apartamentos!',
          icon: 'warning',
          showConfirmButton: false,
          timer: 2500,
          customClass: {
            popup: 'swal2-popup'
          }
        });
        console.log(erro);
      }
    });
  }

  deletar(apartamento: Apartamento) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar este apartamento?',
      text: "Você não poderá reverter esta ação!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apartamentoService.delete(apartamento.aparnum).subscribe({
          next: retorno => {
            Swal.fire({
              title: 'Apartamento deletado com sucesso!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            });
            this.listAll();
          },
          error: erro => {
            Swal.fire({
              title: 'Erro ao deletar apartamento',
              icon: 'error',
              text: 'O apartamento esta ocupado!',
              showConfirmButton: true
            });
            console.log(erro);
          }
        });
      }
    });
  }
  
}

