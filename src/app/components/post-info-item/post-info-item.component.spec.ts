import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoItemComponent } from './post-info-item.component';

describe('PostInfoItemComponent', () => {
  let component: PostInfoItemComponent;
  let fixture: ComponentFixture<PostInfoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInfoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
