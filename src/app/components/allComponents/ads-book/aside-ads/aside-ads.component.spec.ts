import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideAdsComponent } from './aside-ads.component';

describe('AsideAdsComponent', () => {
  let component: AsideAdsComponent;
  let fixture: ComponentFixture<AsideAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
