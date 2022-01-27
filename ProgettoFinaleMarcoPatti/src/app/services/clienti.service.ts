import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Clienti } from '../classes/clienti';
import { ComuneData } from '../classes/comune-data';

import { ClientiInterfaccia } from '../interfaces/clienti-interfaccia';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {


  urlApi = 'http://epicode.online/epicodebeservice_v2/';
  

  constructor(private http: HttpClient) {

  }


  getClients() {
    return this.http.get<ClientiInterfaccia>(this.urlApi + 'api/clienti?page=0&size=20&sort=id,ASC')
  }

  getClientsById(id: number) {
    return this.http.get<Clienti>(environment.clients + 'api/clienti/' + id);
  }

  newClients(clients: Clienti){
    return this.http.post<Clienti>(environment.add, clients);
  }

  removeClients(clients: Clienti){
    return this.http.delete(environment.clients + 'api/clienti/'+ clients.id);
  }

  getTipoClients(){
    return this.http.get<string[]>(environment.clients + 'api/clienti/tipicliente');
  }

  editClients(clients: Clienti){
    return this.http.put<Clienti>(environment.clientiedit+clients.id,clients)
  }

  getComuniClients(){
    return this.http.get<ComuneData>(environment.clients + 'api/comuni?page=0&size=20&sort=id,ASC')
  }

  
}
