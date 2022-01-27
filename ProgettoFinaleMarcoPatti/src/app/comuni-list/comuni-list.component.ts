import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clienti } from '../classes/clienti';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-comuni-list',
  templateUrl: './comuni-list.component.html',
  styleUrls: ['./comuni-list.component.css']
})
export class ComuniListComponent implements OnInit {

  comuneObj: ComuneData = new ComuneData();
  comuni:Comune[] = []
  

  constructor(private comuneService : ComuniService,
    private router : Router
    ) { }

  ngOnInit(): void {
    


    this.comuneService.getAllComuni().subscribe(response => {
      this.comuneObj = response
      this.comuni = this.comuneObj.content


    })
  }
  detail(item : Comune){
  this.router.navigate(['comuni', item.id, 'detail'])
  }

  delete(item: Comune){
  this.comuneService.removeComune(item).subscribe(data => {
    this.comuni = this.comuni.filter(ele => ele !== item)
  })
  }

}
