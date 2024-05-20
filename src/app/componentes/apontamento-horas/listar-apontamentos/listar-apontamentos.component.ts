import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-apontamentos',
  templateUrl: './listar-apontamentos.component.html',
  styleUrls: ['./listar-apontamentos.component.css']
})
export class ListarApontamentosComponent implements OnInit {
  
   listaApontamentos = [ 
    {
      id:'1',
    tarefa:'13001',
    data:'2024-20-05',
    horas:'08:15',
    comentario:'primeira atividade do dia ',
    atividade:''
    },
    {
      id:'2',
    tarefa:'13002',
    data:'2024-20-05',
    horas:'13:00',
    comentario:'segunda atividade do dia',
    atividade:''
    },
    {
      id:'3',
    tarefa:'13003',
    data:'2024-20-05',
    horas:'15:00',
    comentario:'terceira atividade do dia',
    atividade:''
    },
    {
      id:'4',
    tarefa:'13004',
    data:'2024-20-05',
    horas:'16:50',
    comentario:'Browser application bundle generation complete.| Initial Total |   2.98 MB Build at: 024-05-20T19:50:58.611Z - Hash: 9783e1b76aaf446b - Time: 10702ms ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ** ✔ Compiled successfully.',
    atividade:'comentario grande'
    },
  ];




  constructor() { }

  ngOnInit(): void {
  }

}
