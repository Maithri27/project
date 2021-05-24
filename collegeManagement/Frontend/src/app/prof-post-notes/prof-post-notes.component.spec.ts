import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfPostNotesComponent } from './prof-post-notes.component';

describe('ProfPostNotesComponent', () => {
  let component: ProfPostNotesComponent;
  let fixture: ComponentFixture<ProfPostNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfPostNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfPostNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
