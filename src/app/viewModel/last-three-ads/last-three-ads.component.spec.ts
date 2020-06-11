import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastThreeAdsComponent } from './last-three-ads.component';

describe('LastThreeAdsComponent', () => {
  let component: LastThreeAdsComponent;
  let fixture: ComponentFixture<LastThreeAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastThreeAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastThreeAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
