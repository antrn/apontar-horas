import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inserir-apontamento',
  templateUrl: './inserir-apontamento.component.html',
  styleUrls: ['./inserir-apontamento.component.css']
})
export class InserirApontamentoComponent implements OnInit {

  apontamentoHoras = {
    id:'1',
    tarefa:'Aprendendo Angular',
    data:'2024-20-05',
    horas:'08:12',
    comentario:'teste',
    atividade:'verificar'
  }




  constructor() { }

  ngOnInit(): void {
  }

  criarApontamento() {
    alert("Novo Apontamento criado!")
}

cancelarApontamento() {
  alert("Cancelado!")
}

}
