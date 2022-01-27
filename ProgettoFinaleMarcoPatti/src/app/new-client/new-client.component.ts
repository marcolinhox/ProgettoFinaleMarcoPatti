import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';

import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  clients: Clienti = new Clienti();
  tipoCliente : string[] = []

   com: ComuneData = new ComuneData()
   comune: Comune[]=[] 

  constructor(private clientsService: ClientiService,
    private router: Router) { }

  ngOnInit(): void {
    this.clientsService.getTipoClients().subscribe(data =>{
      this.tipoCliente = data;

      
    })
    this.clientsService.getComuniClients().subscribe(data => {
      this.com = data
      this.comune = this.com.content
    })
  }
  

  new(){
  this.clients.dataInserimento = "2019-06-01T08:11:01.911+00:00"
  this.clients.dataUltimoContatto = "2021-03-24T21:32:06.375+00:00"
  this.clientsService.newClients(this.clients).subscribe(response => console.log(response));
  this.router.navigate([''])
  console.log(this.clients)
  }
}
