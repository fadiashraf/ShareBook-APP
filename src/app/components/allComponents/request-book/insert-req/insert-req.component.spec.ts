import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertReqComponent } from './insert-req.component';

describe('InsertReqComponent', () => {
  let component: InsertReqComponent;
  let fixture: ComponentFixture<InsertReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
