import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Fattura } from '../classes/fattura';
import { FatturaData } from '../classes/fattura-data';
import { SedeOperativa } from '../classes/sede-operativa';
import { ClientiService } from '../services/clienti.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  clients: Clienti = new Clienti();
  indirizzi: SedeOperativa[] = [];
  fattObj: FatturaData = new FatturaData();
  fattura: Fattura[]=[]


  constructor(
    private route: ActivatedRoute,
    private clientsService: ClientiService,
    private router: Router,
    private fatturaService : FatturaService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.clientsService.getClientsById(params['id']).subscribe(clients =>{
         this.clients = clients
         this.fatturaService.getByClient(params['id']).subscribe(response => {
          this.fattObj = response
           this.fattura = this.fattObj.content
        });
      
      })
    })
  }

  edit(clients: Clienti){
    this.router.navigate(['client', clients.id, 'edit'])
    console.log(clients)
  }

}
