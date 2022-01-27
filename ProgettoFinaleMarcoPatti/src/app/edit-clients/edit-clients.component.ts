import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.css']
})
export class EditClientsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientiService) { }

    clients !: Clienti
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
    this.clientsService.getClientsById(params['id']).subscribe(response =>{
      this.clients = response
    })
    })
  }
  update(){
    this.clientsService.editClients(this.clients).subscribe(response => console.log(response));
    this.router.navigate([''])
  }

}
