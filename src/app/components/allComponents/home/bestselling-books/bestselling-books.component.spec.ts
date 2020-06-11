import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellingBooksComponent } from './bestselling-books.component';

describe('BestsellingBooksComponent', () => {
  let component: BestsellingBooksComponent;
  let fixture: ComponentFixture<BestsellingBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestsellingBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellingBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
