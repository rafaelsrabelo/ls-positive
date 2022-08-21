import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoDogWalkingComponent } from './agendamento-dog-walking.component';

describe('AgendamentoDogWalkingComponent', () => {
  let component: AgendamentoDogWalkingComponent;
  let fixture: ComponentFixture<AgendamentoDogWalkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentoDogWalkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoDogWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
