import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-estado-siniestros',
  templateUrl: './modal-estado-siniestros.component.html',
  styleUrls: ['./modal-estado-siniestros.component.scss']
})
export class ModalEstadoSiniestrosComponent implements OnInit {

  public loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalEstadoSiniestrosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private mainService: ValidacionCorreosService
  ) {
    // this.consultarId(data);
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  close(): void {
    this.dialogRef.close();
  }
}
