import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemAtivaComponent } from './hospedagem-ativa.component';

describe('HospedagemAtivaComponent', () => {
  let component: HospedagemAtivaComponent;
  let fixture: ComponentFixture<HospedagemAtivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemAtivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospedagemAtivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
