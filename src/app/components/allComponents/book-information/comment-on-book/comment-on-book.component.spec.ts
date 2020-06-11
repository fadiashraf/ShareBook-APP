import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOnBookComponent } from './comment-on-book.component';

describe('CommentOnBookComponent', () => {
  let component: CommentOnBookComponent;
  let fixture: ComponentFixture<CommentOnBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentOnBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOnBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
