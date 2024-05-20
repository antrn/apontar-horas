import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-apontamento',
  templateUrl: './card-apontamento.component.html',
  styleUrls: ['./card-apontamento.component.css']
})
export class CardApontamentoComponent implements OnInit {

//utilização do decorator para permitir que o componente pai acesse os dados do componente filho.
  @Input()cardApontamento = {

    id:'',
    tarefa:'',
    data:'',
    horas:'',
    comentario:'',
    atividade:''
  }


  constructor() { }

  ngOnInit(): void {
  }

  //função para verificar o tamanho do comentário para aplicar diferentes estilos nos cards na tela de listagem dos apontamentos.
tamanhoCard(): string{
  if (this.cardApontamento.comentario.length >=256){
    return'conteudoCard-grande'
  }
  return 'conteudoCard-pequeno'
}

}
