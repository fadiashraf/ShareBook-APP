import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAdsComponent } from './child-ads.component';

describe('ChildAdsComponent', () => {
  let component: ChildAdsComponent;
  let fixture: ComponentFixture<ChildAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
