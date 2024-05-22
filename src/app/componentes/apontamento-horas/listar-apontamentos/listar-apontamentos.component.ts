import { Component, OnInit } from '@angular/core';
import { Apontamento } from '../card-apontamento/apontamento';

@Component({
  selector: 'app-listar-apontamentos',
  templateUrl: './listar-apontamentos.component.html',
  styleUrls: ['./listar-apontamentos.component.css']
})
export class ListarApontamentosComponent implements OnInit {

   listaApontamentos:Apontamento[] = [

  ];




  constructor() { }

  ngOnInit(): void {
  }

}
