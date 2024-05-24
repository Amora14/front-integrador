import { Apartamento } from "./apartamento";

export class Cliente {
    nome!: string;
    id!: number;
    entrada!: string;
    nascimento!: string;
    cpf!: number; 
    rg!: number; 
    telefone!: number; 
    profissao!: string;
    email!: string;
    ap!: Apartamento;

    constructor() {
        this.ap = new Apartamento(); // Inicializa o objeto Apartamento
    }
}
