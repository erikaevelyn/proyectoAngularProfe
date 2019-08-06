import { TestBed } from '@angular/core/testing';

import { ServicioEnvioService } from './servicio-envio.service';

describe('ServicioEnvioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioEnvioService = TestBed.get(ServicioEnvioService);
    expect(service).toBeTruthy();
  });
});
