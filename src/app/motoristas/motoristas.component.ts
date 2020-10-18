import { Component, OnInit } from '@angular/core';
import { Motorista } from '../models/Motorista';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {

  public title = 'Motoristas';

  public motoristas: Motorista[] = [
    {codMotorista: 1, nome: 'Jose Antonio'},
    {codMotorista: 2, nome: 'Aparecido'},
    {codMotorista: 3, nome: 'Augusto Nunes'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
