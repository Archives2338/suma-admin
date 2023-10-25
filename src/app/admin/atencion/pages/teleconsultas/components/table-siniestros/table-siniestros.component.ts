import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { ModalEstadoSiniestrosComponent } from '../../../modal-estado-siniestros/modal-estado-siniestros.component';
import { Siniestros } from 'src/app/admin/proveedores/interfaces/horarios';

@Component({
  selector: 'app-table-siniestros',
  templateUrl: './table-siniestros.component.html',
  styleUrls: ['./table-siniestros.component.scss']
})
export class TableSiniestrosComponent implements OnInit {

  // input para recibir los siniestros
  @Input() public siniestros:Array<Siniestros> = [];
  @Input() public siniestros2:Array<Siniestros> = [];

  public inicio :any ;
  public fin :any ;
  public columsTable: string[] = ['Especialidad','Proveedor','Fecha','Horarios Disponibles'];
  public group: number = 10;
  public groupaux!: number;
  public search: string = '';
  // public sortInfoData: any[] = [];
  public page!: number;
  public size: number = 0;
  public filtro: string = '';

  public loading: boolean = false;
  public esconder: boolean = false;

  constructor(
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
      this.siniestros2 = this.siniestros;
      this.size = this.siniestros2.length;
      // console.warn(this.siniestros);
      // console.warn(this.siniestros2);
  }

  exportToExcel(): void {
    this.loading = true;

    // Crear un nuevo arreglo con los campos específicos que deseas exportar
    const siniestrosExport = this.siniestros.map((item) => {
      return {
        'Nombre Comercial': item.nombre_comercial,
        'Tipo de documento de identidad': item.tipo_doc,
        'Número de documento de identidad': item.nro_doc,
        'Apellido paterno': item.apellido_paterno,
        'Apellido Materno': item.apellido_materno,
        'Nombres': item.nombre1 + ' ' + item.nombre2,
        'Sexo': item.sexo,
        'Relato Médico': item.relato_medico,
        'Nro Teléfono': item.nro_telefono,
        'Dirección': item.direccion,
        'Nro Sin Suma': item.nro_sin_suma,
        'Tipo Atención': item.tipo_atencion,
        'Inicio Siniestro': item.inicio_siniestro,
        'Hora Inicio Siniestro': item.hora_ini_siniestro,
        'Proveedor': item.proveedor,
        'Especialidad': item.especialidad,
        'Estado': item.estado_siniestro,
        'Motivo de observación': item.motivo,
        'Diagnóstico': item.diagnostico,
        'Fin de siniestro': item.fin_siniestro,
        'Hora Fin de siniestro': item.hora_fin_siniestro
      };
    });

    // Crear un nuevo libro Excel
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    // Crear una nueva hoja de cálculo
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(siniestrosExport);
    // Agregar la hoja al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, 'ListaSiniestros');
    // Crear una URL para el blob en base64
    const blobBase64 = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'base64'
    });

    // Convertir el base64 a Blob
    const byteCharacters = atob(blobBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    // Crear una URL para el blob y descargar el archivo
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    // Define un nombre de archivo
    a.download = 'Reporte_Siniestros.xlsx';
    a.click();
    window.URL.revokeObjectURL(url);
    this.loading = false;
  }

  openModal(estado_siniestro: any, inicio_siniestro: any, motivo: any) {
    const dialogRef = this.dialog.open(ModalEstadoSiniestrosComponent, {
      // width: '402px',
      // height: '255px',
      width: '442px',
      height: '380px',
      panelClass: 'dialog-actions',
      data: {
        estado_siniestro: estado_siniestro,
        inicio_siniestro: inicio_siniestro,
        motivo: motivo
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('El modal se ha cerrado');
    });
  }


  filtrarSiniestros() {

    this.page = 1;
    this.siniestros = this.siniestros2;
    // console.log(this.siniestros);
    // console.log(this.siniestros2);

    this.siniestros = this.siniestros.filter((eme) => {
      if (eme) {
        return (
          (eme.nro_sin_suma && eme.nro_sin_suma.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.inicio_siniestro && eme.hora_ini_siniestro && (`${eme.inicio_siniestro} ${eme.hora_ini_siniestro}`).toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.proveedor && eme.proveedor.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.especialidad && eme.especialidad.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.tipo_doc && eme.nro_doc && (`${eme.tipo_doc} ${eme.nro_doc}`).toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.apellido_paterno && eme.apellido_materno && eme.nombre1 && eme.nombre2 && (`${eme.apellido_paterno} ${eme.apellido_materno} ${eme.nombre1} ${eme.nombre2}`).toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.tipo_atencion && eme.tipo_atencion.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.direccion && eme.direccion.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.nro_telefono && eme.nro_telefono.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.diagnostico && eme.diagnostico.toString().toLowerCase().includes(this.filtro.toLowerCase())) ||
          (eme.estado_siniestro && eme.estado_siniestro.toString().toLowerCase().includes(this.filtro.toLowerCase()))
        );
      }
      return false;
    });
  }

}
