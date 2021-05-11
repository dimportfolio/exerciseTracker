import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseEntryComponent } from './exercise-entry.component';

describe('ExerciseEntryComponent', () => {
  let component: ExerciseEntryComponent;
  let fixture: ComponentFixture<ExerciseEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
