import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStatisticalComponent } from './first-statistical.component';

describe('FirstStatisticalComponent', () => {
  let component: FirstStatisticalComponent;
  let fixture: ComponentFixture<FirstStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
