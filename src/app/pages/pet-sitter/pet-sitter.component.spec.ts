import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetSitterComponent } from './pet-sitter.component';

describe('PetSitterComponent', () => {
  let component: PetSitterComponent;
  let fixture: ComponentFixture<PetSitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetSitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetSitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
