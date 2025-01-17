import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPopUpComponent } from './information-pop-up.component';

describe('InformationPopUpComponent', () => {
  let component: InformationPopUpComponent;
  let fixture: ComponentFixture<InformationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
