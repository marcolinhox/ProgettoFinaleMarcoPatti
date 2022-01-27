
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-table-clienti',
  templateUrl: './table-clienti.component.html',
  styleUrls: ['./table-clienti.component.css']
})
export class TableClientiComponent implements OnInit {

  clients: Clienti[] = [];

  constructor(private clientService: ClientiService,
    private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe(data => this.clients = data.content)
  }

  detail(item: Clienti) {
    this.router.navigate(['clients', item.id])
  }

  remove(item: Clienti){
    this.clientService.removeClients(item).subscribe(data => {
    this.clients = this.clients.filter(ele => ele !== item);
    })
  }

}
