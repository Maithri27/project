import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPostAttendanceComponent } from './prof-post-attendance.component';

describe('ProfPostAttendanceComponent', () => {
  let component: ProfPostAttendanceComponent;
  let fixture: ComponentFixture<ProfPostAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfPostAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPostAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
