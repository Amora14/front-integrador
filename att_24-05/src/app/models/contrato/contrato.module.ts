import { Apartamento } from "../apartamento";
import { Cliente } from "../cliente";


export class ContratoModule { 
  id!: number;
  identificador!: string;
  cliente!: Cliente;
  ap!: Apartamento;

  constructor() {
    this.ap = new Apartamento(); // Inicializa o objeto Apartamento
    this.cliente = new Cliente();
  }
}

