import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';
import { ComuniService } from '../services/comuni.service';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-add-comune',
  templateUrl: './add-comune.component.html',
  styleUrls: ['./add-comune.component.css']
})
export class AddComuneComponent implements OnInit {
  comune : Comune = new Comune()
  

  prov: ProvinciaData = new ProvinciaData();
  provincia: Provincia []= []

  constructor(private comuniService : ComuniService,
    private provinciaService : ProvinceService,
    private router: Router) { }

  ngOnInit(): void {
    this.provinciaService.getAllProvince().subscribe(data => {
      this.prov = data
      this.provincia = this.prov.content
    })
  }

  newComune(){
    this.comuniService.addComune(this.comune).subscribe(response => console.log(response))
    this.router.navigate(['comuni'])
  }

}
