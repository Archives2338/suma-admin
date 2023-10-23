export interface Horarios {
  Especialidad: string
  Nombres: string
  fecha: string
  horarios: Horario[]
  idproveedorcontacto: number
}
export interface Horario {
  estado: string
  hora: string
}

export interface Siniestros {
  nombre_comercial: string,
  apellido_paterno: string,
  apellido_materno: string,
  nombre1: string,
  nombre2: string,
  sexo: string,
  relato_medico: string,
  nro_telefono: string,
  direccion: string,
  nro_sin_suma: string,
  tipo_atencion: string,
  inicio_siniestro: string,
  proveedor: string,
  especialidad: string,
  diagnostico: string,
  fin_siniestro: string,
  url_pdf: string,
  tipo_doc: string,
  nro_doc: string,
  estado_siniestro: string,
  motivo: string,
  hora_ini_siniestro: string,
  hora_fin_siniestro: string
}
