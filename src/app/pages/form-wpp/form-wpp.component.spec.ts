import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWppComponent } from './form-wpp.component';

describe('FormWppComponent', () => {
  let component: FormWppComponent;
  let fixture: ComponentFixture<FormWppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
