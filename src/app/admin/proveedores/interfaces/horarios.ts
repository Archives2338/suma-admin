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
