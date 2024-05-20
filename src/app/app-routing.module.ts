import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirApontamentoComponent } from './componentes/apontamento-horas/inserir-apontamento/inserir-apontamento.component';
import { ListarApontamentosComponent } from './componentes/apontamento-horas/listar-apontamentos/listar-apontamentos.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'listar-apontamentos',
    pathMatch:'full'
  },
  {
    path:'inserir-apontamento',
    component: InserirApontamentoComponent
  },
  {
    path:'listar-apontamentos',
    component: ListarApontamentosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
