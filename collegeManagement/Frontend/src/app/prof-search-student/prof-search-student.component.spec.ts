import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSearchStudentComponent } from './prof-search-student.component';

describe('ProfSearchStudentComponent', () => {
  let component: ProfSearchStudentComponent;
  let fixture: ComponentFixture<ProfSearchStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSearchStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSearchStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
