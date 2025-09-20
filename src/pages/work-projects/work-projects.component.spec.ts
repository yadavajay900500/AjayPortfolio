import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProjectsComponent } from './work-projects.component';

describe('WorkProjectsComponent', () => {
  let component: WorkProjectsComponent;
  let fixture: ComponentFixture<WorkProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
