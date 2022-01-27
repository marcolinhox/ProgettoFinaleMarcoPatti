import { Clienti } from "../classes/clienti";

export interface ClientiInterfaccia {
    count:number;
    next:string;
    previous:string;
    content: Array<Clienti>;
}
