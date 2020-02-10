import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsInfoComponent } from './posts-info.component';

describe('PostsInfoComponent', () => {
  let component: PostsInfoComponent;
  let fixture: ComponentFixture<PostsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
