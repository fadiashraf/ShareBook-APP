import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStatisticalComponent } from './second-statistical.component';

describe('SecondStatisticalComponent', () => {
  let component: SecondStatisticalComponent;
  let fixture: ComponentFixture<SecondStatisticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStatisticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStatisticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
