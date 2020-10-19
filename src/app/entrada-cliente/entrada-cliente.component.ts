import { Component, OnInit } from '@angular/core';
import { EntradaCliente } from '../models/EntradaCliente';

@Component({
  selector: 'app-entrada-cliente',
  templateUrl: './entrada-cliente.component.html',
  styleUrls: ['./entrada-cliente.component.css']
})
export class EntradaClienteComponent implements OnInit {

  public title = 'Entrada de veículos';
  
  public entrada: EntradaCliente;

  buscaVeiculo(pEntrada: EntradaCliente){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
