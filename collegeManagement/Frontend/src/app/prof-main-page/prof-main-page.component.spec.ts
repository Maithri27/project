import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfMainPageComponent } from './prof-main-page.component';

describe('ProfMainPageComponent', () => {
  let component: ProfMainPageComponent;
  let fixture: ComponentFixture<ProfMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
