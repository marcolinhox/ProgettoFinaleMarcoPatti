import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Provincia } from '../classes/provincia';
import { ProvinciaData } from '../classes/provincia-data';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getAllProvince(){
    return this.http.get<ProvinciaData>(environment.province)
  }
  detailProvince(id : number){
    return this.http.get<Provincia>(environment.clients + 'api/province/'+id)
  }
  addProvince(provincia : Provincia){
    return this.http.post<Provincia>(environment.province, provincia)
  }
  removeProvince(provincia : Provincia){
    return this.http.delete(environment.clients+ 'api/province/' +provincia.id)
  }
  
  updateProvince(provincia : Provincia){
    return this.http.put<Provincia>(environment.clients + 'api/province/'+provincia.id, provincia)
  }
}
