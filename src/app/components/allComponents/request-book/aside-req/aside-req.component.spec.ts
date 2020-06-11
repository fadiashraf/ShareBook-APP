import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideReqComponent } from './aside-req.component';

describe('AsideReqComponent', () => {
  let component: AsideReqComponent;
  let fixture: ComponentFixture<AsideReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
