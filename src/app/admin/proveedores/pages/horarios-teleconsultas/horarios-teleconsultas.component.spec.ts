import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosTeleconsultasComponent } from './horarios-teleconsultas.component';

describe('HorariosTeleconsultasComponent', () => {
  let component: HorariosTeleconsultasComponent;
  let fixture: ComponentFixture<HorariosTeleconsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosTeleconsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorariosTeleconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
