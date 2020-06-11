import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedAutherComponent } from './picked-auther.component';

describe('PickedAutherComponent', () => {
  let component: PickedAutherComponent;
  let fixture: ComponentFixture<PickedAutherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedAutherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedAutherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
