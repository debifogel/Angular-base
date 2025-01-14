import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCoursesComponent } from './tree-courses.component';

describe('TreeCoursesComponent', () => {
  let component: TreeCoursesComponent;
  let fixture: ComponentFixture<TreeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
