export interface Usuario {
  email: string;
  id: number;
  name: string;
  username: string;
}

export interface Modulo {
  id: number;
  name: string;
  views: Vista[];
}

export interface Vista {
  id: number;
  name: string;
}

export interface Imagen {
  key: string;
  img: string;
}

export const imgs: Array<Imagen> = [
  {
    key: 'Proveedores',
    img: 'assets/svg/drawer/atenciones.svg',
  },
  {
    key: 'Atencion',
    img: 'assets/svg/drawer/icono.svg',
  }
]
