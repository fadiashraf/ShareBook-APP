import { TestBed } from '@angular/core/testing';

import { LoginGaurdService } from './login-gaurd.service';

describe('LoginGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGaurdService = TestBed.get(LoginGaurdService);
    expect(service).toBeTruthy();
  });
});
