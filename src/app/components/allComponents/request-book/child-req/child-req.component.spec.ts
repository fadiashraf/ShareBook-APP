import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildReqComponent } from './child-req.component';

describe('ChildReqComponent', () => {
  let component: ChildReqComponent;
  let fixture: ComponentFixture<ChildReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
