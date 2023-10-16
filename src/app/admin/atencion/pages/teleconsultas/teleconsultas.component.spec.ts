import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconsultasComponent } from './teleconsultas.component';

describe('TeleconsultasComponent', () => {
  let component: TeleconsultasComponent;
  let fixture: ComponentFixture<TeleconsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleconsultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleconsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
