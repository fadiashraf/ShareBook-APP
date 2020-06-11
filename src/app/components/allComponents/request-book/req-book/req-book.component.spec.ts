import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqBookComponent } from './req-book.component';

describe('ReqBookComponent', () => {
  let component: ReqBookComponent;
  let fixture: ComponentFixture<ReqBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
