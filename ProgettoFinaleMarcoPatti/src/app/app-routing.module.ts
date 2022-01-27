import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { EditComuneComponent } from './edit-comune/edit-comune.component';
import { FatturaAddComponent } from './fattura-add/fattura-add.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { FatturaEditComponent } from './fattura-edit/fattura-edit.component';
import { FatturaListComponent } from './fattura-list/fattura-list.component';
import { NewClientComponent } from './new-client/new-client.component';
import { ProvinceDetailComponent } from './province-detail/province-detail.component';
import { ProvinceEditComponent } from './province-edit/province-edit.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';

const routes: Routes = [
  { path: '', component: TableClientiComponent},
  { path : 'clients/:id', component : ClientDetailComponent},
  { path : 'client/new', component : NewClientComponent},
  { path : 'client/:id/edit', component : EditClientsComponent},
  { path : 'comuni', component : ComuniListComponent},
  { path : 'comuni/:id/detail', component: DetailComuneComponent},
  { path : 'comuni/:id/edit', component: EditComuneComponent},
  { path : 'province', component : ProvinceListComponent},
  { path : 'province/:id/detail', component: ProvinceDetailComponent},
  { path : 'province/:id/edit', component: ProvinceEditComponent},
  { path : 'comune/new', component : AddComuneComponent},
  { path : 'province/new', component : AddProvinciaComponent},
  { path : 'fatture', component: FatturaListComponent},
  { path : 'fatture/new', component: FatturaAddComponent},
  { path : 'fatture/:id/detail', component :FatturaDetailComponent},
  { path : 'fatture/:id/edit', component : FatturaEditComponent},
  { path : 'clients/:id/fatture/:id/detail', component: FatturaDetailComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
