import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAdsComponent } from './insert-ads.component';

describe('InsertAdsComponent', () => {
  let component: InsertAdsComponent;
  let fixture: ComponentFixture<InsertAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
