import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstadoSiniestrosComponent } from './modal-estado-siniestros.component';

describe('ModalEstadoSiniestrosComponent', () => {
  let component: ModalEstadoSiniestrosComponent;
  let fixture: ComponentFixture<ModalEstadoSiniestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEstadoSiniestrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEstadoSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
