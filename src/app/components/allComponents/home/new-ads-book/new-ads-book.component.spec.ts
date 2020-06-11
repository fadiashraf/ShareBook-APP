import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdsBookComponent } from './new-ads-book.component';

describe('NewAdsBookComponent', () => {
  let component: NewAdsBookComponent;
  let fixture: ComponentFixture<NewAdsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAdsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAdsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
