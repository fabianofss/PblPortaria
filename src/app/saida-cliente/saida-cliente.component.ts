import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saida-cliente',
  templateUrl: './saida-cliente.component.html',
  styleUrls: ['./saida-cliente.component.css']
})
export class SaidaClienteComponent implements OnInit {

  public title = 'Saída de clientes';

  constructor() { }

  ngOnInit(): void {
  }

}
