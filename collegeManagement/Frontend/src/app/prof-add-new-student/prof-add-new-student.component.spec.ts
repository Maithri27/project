import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfAddNewStudentComponent } from './prof-add-new-student.component';

describe('ProfAddNewStudentComponent', () => {
  let component: ProfAddNewStudentComponent;
  let fixture: ComponentFixture<ProfAddNewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfAddNewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfAddNewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
