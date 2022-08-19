import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemAfetivaComponent } from './hospedagem-afetiva.component';

describe('HospedagemAfetivaComponent', () => {
  let component: HospedagemAfetivaComponent;
  let fixture: ComponentFixture<HospedagemAfetivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemAfetivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedagemAfetivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
