import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOnUserComponent } from './comment-on-user.component';

describe('CommentOnUserComponent', () => {
  let component: CommentOnUserComponent;
  let fixture: ComponentFixture<CommentOnUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentOnUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOnUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
