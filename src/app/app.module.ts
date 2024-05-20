import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { InserirApontamentoComponent } from './componentes/apontamento-horas/inserir-apontamento/inserir-apontamento.component';
import { FormsModule } from '@angular/forms';
import { ListarApontamentosComponent } from './componentes/apontamento-horas/listar-apontamentos/listar-apontamentos.component';
import { CardApontamentoComponent } from './componentes/apontamento-horas/card-apontamento/card-apontamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    InserirApontamentoComponent,
    ListarApontamentosComponent,
    CardApontamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
