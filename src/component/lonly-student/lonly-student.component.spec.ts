import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LonlyStudentComponent } from './lonly-student.component';

describe('LonlyStudentComponent', () => {
  let component: LonlyStudentComponent;
  let fixture: ComponentFixture<LonlyStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LonlyStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LonlyStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
