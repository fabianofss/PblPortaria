import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public title = 'Clientes';

  public clientes: Cliente[] = [
    {codCliente: 1, nome: 'Big Frango'},
    {codCliente: 2, nome: 'Orion'},
    {codCliente: 3, nome: 'LG Transportes'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
