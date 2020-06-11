import { TestBed } from '@angular/core/testing';

import { RegisterGaurdService } from './register-gaurd.service';

describe('RegisterGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterGaurdService = TestBed.get(RegisterGaurdService);
    expect(service).toBeTruthy();
  });
});
