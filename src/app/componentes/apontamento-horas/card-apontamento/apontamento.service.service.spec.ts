import { TestBed } from '@angular/core/testing';

import { ApontamentoServiceService } from './apontamento.service.service';

describe('ApontamentoServiceService', () => {
  let service: ApontamentoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApontamentoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
