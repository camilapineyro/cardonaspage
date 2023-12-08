import { TestBed } from '@angular/core/testing';

import { FormularioService } from './core/services/formulario.service';

describe('FormularioService', () => {
  let service: FormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
