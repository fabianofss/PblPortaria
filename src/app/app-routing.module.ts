import { DashboardComponent } from './dashboard/dashboard.component';
import { SaidaClienteComponent } from './saida-cliente/saida-cliente.component';
import { EntradaClienteComponent } from './entrada-cliente/entrada-cliente.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { AgendasComponent } from './agendas/agendas.component';

const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'motoristas', component: MotoristasComponent},
  {path: 'veiculos', component: VeiculosComponent},
  {path: 'agendas', component: AgendasComponent},
  {path: 'entradacliente', component: EntradaClienteComponent},
  {path: 'saidacliente', component: SaidaClienteComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
