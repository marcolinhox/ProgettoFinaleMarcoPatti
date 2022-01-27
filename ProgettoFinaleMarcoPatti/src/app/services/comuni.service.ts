import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Comune } from '../classes/comune';
import { ComuneData } from '../classes/comune-data';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  constructor(private http: HttpClient) { }

  getAllComuni(){
    return this.http.get<ComuneData>(environment.comuni)
  }
  
  addComune(comune : Comune){
    return this.http.post<Comune>(environment.comuni, comune)
  }
  removeComune(comune: Comune){
    return this.http.delete(environment.clients+ 'api/comuni/' + comune.id)
  }
  updateComune(comune : Comune){
    return this.http.put<Comune>(environment.clients + 'api/comuni/'+ comune.id, comune)
  }
  detailComune(id : number){
  return this.http.get<Comune>(environment.clients + 'api/comuni/'+id)
  }
}
