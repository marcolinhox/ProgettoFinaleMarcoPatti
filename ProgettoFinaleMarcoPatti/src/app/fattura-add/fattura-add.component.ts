import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientData } from '../classes/client-data';
import { Clienti } from '../classes/clienti';
import { Fattura } from '../classes/fattura';
import { Stato } from '../classes/stato';

import { StatoData } from '../classes/stato-data';

import { ClientiService } from '../services/clienti.service';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-add',
  templateUrl: './fattura-add.component.html',
  styleUrls: ['./fattura-add.component.css']
})
export class FatturaAddComponent implements OnInit {

  fattura: Fattura = new Fattura();
  statoFattura: StatoData = new StatoData()
  stato:Stato[]=[]
  client: ClientData = new ClientData()
  clienti: Clienti[]=[]

  constructor(private fatturaService: FatturaService,
    private router : Router,
    private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.fatturaService.getStatoFattura().subscribe(data =>{
    this.statoFattura = data
    this.stato = this.statoFattura.content
    console.log(this.stato)
    })
    this.clientiService.getClients().subscribe(data =>{
      this.client = data;
      this.clienti = this.client.content
    })
  }
  

  newFattura(){
    this.fattura.data="2020-12-15T22:22:04.571+00:00"
    this.fatturaService.createFattura(this.fattura).subscribe(response => console.log(response))
    this.router.navigate(['fatture'])
  }

}
