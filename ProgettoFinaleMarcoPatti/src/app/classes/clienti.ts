
import { IndirizzoSedeLegale } from "./indirizzo-sede-legale";

import { SedeOperativa } from "./sede-operativa";

export class Clienti {
    id?: number;
    ragioneSociale!: string;
    partitaIva!: string;
    tipoCliente!: string;
    email!: string;
    pec!:string;
    telefono!: string;
    fatturatoAnnuale?: number;
    nomeContatto!: string;
    cognomeContatto!: string;
    telefonoContatto!: string;
    emailContatto!: string;
    indirizzoSedeOperativa!:SedeOperativa;
    indirizzoSedeLegale!:IndirizzoSedeLegale;
    dataInserimento!:string;
    dataUltimoContatto!:string;
    
    constructor(){
        this.indirizzoSedeOperativa = new SedeOperativa();
        this.indirizzoSedeLegale = new IndirizzoSedeLegale();
    }

}
            
      
   



 