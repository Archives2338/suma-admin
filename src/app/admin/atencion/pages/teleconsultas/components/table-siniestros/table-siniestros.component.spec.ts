import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSiniestrosComponent } from './table-siniestros.component';

describe('TableSiniestrosComponent', () => {
  let component: TableSiniestrosComponent;
  let fixture: ComponentFixture<TableSiniestrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSiniestrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
