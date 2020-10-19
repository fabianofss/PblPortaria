import { Component, OnInit } from '@angular/core';
import { Agenda } from '../models/Agenda';

@Component({
  selector: 'app-agendas',
  templateUrl: './agendas.component.html',
  styleUrls: ['./agendas.component.css']
})
export class AgendasComponent implements OnInit {

  public title = 'Agendas';

  public agendaSelecionada: Agenda;

  public agendas: Agenda[] = [
    {codAgenda: 1, codCliente: 1, codVeiculo: 1, codMotorista: 1, dtAgenda: '17/10/2020', hrAgenda: '0810', dtChegada: '', hrChegada: ''},
    {codAgenda: 2, codCliente: 2, codVeiculo: 2, codMotorista: 2, dtAgenda: '17/10/2020', hrAgenda: '0920', dtChegada: '', hrChegada: ''},
    {codAgenda: 3, codCliente: 3, codVeiculo: 3, codMotorista: 3, dtAgenda: '17/10/2020', hrAgenda: '11920', dtChegada: '', hrChegada: ''}
  ];

  agendaSelected(agenda: Agenda){
    this.agendaSelecionada = agenda;
  }

  voltar(){
    this.agendaSelecionada = null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
