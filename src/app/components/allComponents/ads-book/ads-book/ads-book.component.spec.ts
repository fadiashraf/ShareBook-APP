import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBookComponent } from './ads-book.component';

describe('AdsBookComponent', () => {
  let component: AdsBookComponent;
  let fixture: ComponentFixture<AdsBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
