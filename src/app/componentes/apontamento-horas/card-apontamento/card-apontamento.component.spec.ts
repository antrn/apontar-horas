import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardApontamentoComponent } from './card-apontamento.component';

describe('CardApontamentoComponent', () => {
  let component: CardApontamentoComponent;
  let fixture: ComponentFixture<CardApontamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardApontamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardApontamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
