import { Clienti } from "./clienti";
import { Stato } from "./stato";

export class Fattura {
    id?: number;
    data!: string;
    numero!: number;
    anno!: number;
    importo!:string;
    stato!:Stato;
    cliente!:Clienti;
}
