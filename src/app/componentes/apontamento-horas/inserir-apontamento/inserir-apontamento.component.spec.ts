import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirApontamentoComponent } from './inserir-apontamento.component';

describe('InserirApontamentoComponent', () => {
  let component: InserirApontamentoComponent;
  let fixture: ComponentFixture<InserirApontamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirApontamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
