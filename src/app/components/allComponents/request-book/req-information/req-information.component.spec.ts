import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqInformationComponent } from './req-information.component';

describe('ReqInformationComponent', () => {
  let component: ReqInformationComponent;
  let fixture: ComponentFixture<ReqInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
