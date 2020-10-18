import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/Veiculo';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  public title = 'Veículos';

  public veiculos: Veiculo[] = [
   {codVeiculo: 1, placa: 'ABC1A12', chassi: '1234567'},
   {codVeiculo: 2, placa: 'AXX1258', chassi: '1479632'},
   {codVeiculo: 3, placa: 'AVC2016', chassi: '2587415'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
