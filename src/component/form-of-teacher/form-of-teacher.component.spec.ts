import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOfTeacherComponent } from './form-of-teacher.component';

describe('FormOfTeacherComponent', () => {
  let component: FormOfTeacherComponent;
  let fixture: ComponentFixture<FormOfTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormOfTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOfTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
