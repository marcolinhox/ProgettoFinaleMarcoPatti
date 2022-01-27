import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { TableClientiComponent } from './table-clienti/table-clienti.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { NewClientComponent } from './new-client/new-client.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { ComuniListComponent } from './comuni-list/comuni-list.component';
import { ProvinceListComponent } from './province-list/province-list.component';
import { DetailComuneComponent } from './detail-comune/detail-comune.component';
import { EditComuneComponent } from './edit-comune/edit-comune.component';
import { ProvinceDetailComponent } from './province-detail/province-detail.component';
import { ProvinceEditComponent } from './province-edit/province-edit.component';
import { AddProvinciaComponent } from './add-provincia/add-provincia.component';
import { AddComuneComponent } from './add-comune/add-comune.component';
import { FatturaListComponent } from './fattura-list/fattura-list.component';
import { FatturaDetailComponent } from './fattura-detail/fattura-detail.component';
import { FatturaEditComponent } from './fattura-edit/fattura-edit.component';
import { FatturaAddComponent } from './fattura-add/fattura-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableClientiComponent,
    FooterComponent,
    ClientDetailComponent,
    NewClientComponent,
    EditClientsComponent,
    ComuniListComponent,
    ProvinceListComponent,
    DetailComuneComponent,
    EditComuneComponent,
    ProvinceDetailComponent,
    ProvinceEditComponent,
    AddProvinciaComponent,
    AddComuneComponent,
    FatturaListComponent,
    FatturaDetailComponent,
    FatturaEditComponent,
    FatturaAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
