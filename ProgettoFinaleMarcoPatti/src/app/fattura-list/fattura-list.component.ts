import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fattura } from '../classes/fattura';
import { FatturaData } from '../classes/fattura-data';
import { FatturaService } from '../services/fattura.service';

@Component({
  selector: 'app-fattura-list',
  templateUrl: './fattura-list.component.html',
  styleUrls: ['./fattura-list.component.css']
})
export class FatturaListComponent implements OnInit {

   fattObj : FatturaData = new FatturaData();
   fattura : Fattura[] = [];

  constructor(private fatturaService: FatturaService,
    private router: Router) { }

  ngOnInit(): void {
    this.fatturaService.fattureGetAll().subscribe(response =>{
      this.fattObj = response;
      this.fattura = this.fattObj.content
    })
  }
  detailFattura(item : Fattura){
    this.router.navigate(['fatture', item.id ,'detail'])
  }
  remove(item: Fattura){
    this.fatturaService.removeFattura(item).subscribe(data =>{
      this.fattura = this.fattura.filter(ele => ele !== item)
      
    })
  }
  getByStato(){

      this.fatturaService.getByStato().subscribe(response =>{
      this.fattObj = response;
      this.fattura = this.fattObj.content
      this.router.navigate(['fatture'])
    })
  }
  getByAnno(){
      this.fatturaService.getByAnno().subscribe(response =>{
      this.fattObj = response;
      this.fattura = this.fattObj.content
      this.router.navigate(['fatture'])
    })
  }
  getByImporto(){
      this.fatturaService.getByImporto().subscribe(response =>{
      this.fattObj = response;
      this.fattura = this.fattObj.content
      this.router.navigate(['fatture'])
    })
  }
  getByData(){
      this.fatturaService.getByData().subscribe(response =>{
      this.fattObj = response;
      this.fattura = this.fattObj.content
      this.router.navigate(['fatture'])
    })
  }
}
