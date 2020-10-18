import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TituloComponent } from './titulo/titulo.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { AgendasComponent } from './agendas/agendas.component';
import { EntradaClienteComponent } from './entrada-cliente/entrada-cliente.component';
import { SaidaClienteComponent } from './saida-cliente/saida-cliente.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TituloComponent,
    VeiculosComponent,
    ClientesComponent,
    MotoristasComponent,
    AgendasComponent,
    EntradaClienteComponent,
    SaidaClienteComponent,
      DashboardComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
