import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPostGradeComponent } from './prof-post-grade.component';

describe('ProfPostGradeComponent', () => {
  let component: ProfPostGradeComponent;
  let fixture: ComponentFixture<ProfPostGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfPostGradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPostGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
