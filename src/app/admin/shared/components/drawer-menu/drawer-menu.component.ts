import { Component, EventEmitter, Output,OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Modulo } from '../../interfaces/auth';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrls: ['./drawer-menu.component.scss']
})
export class DrawerMenuComponent {


  public panelOpenState: boolean = false;
  public clase: string = 'opened';
  public clase_modulo: string = 'modulo-open';
  public modules: any[]=[];

  // NOMBRE PROVEEDOR
  public nameProvider: string = 'Significad';
  public listItem = [
    { name: 'Horario de Teleconsulta', active: true },
    { name : 'Medicos', active : false }
  ]

  public modulos: any = [
    {
        id: 1,
        name: "Proveedores",
        views: [
            {
                id: 1,
                name: "Horario de Teleconsulta",
                active: true
            },
            {
                id: 2,
                name: "Medicos",
                active: false
            }
        ]
    },
    {
        id: 8,
        name: "Atencion",
        views: [
            {
                id: 13,
                name: "Teleconsultas",
                active: false
            }
        ]
    }
]
  constructor( private router: Router,
              ){}
  ngOnInit(): void {

  }

 // desactivar todos los items del menu
desactiveAllItemsMenu() {
  this.listItem.forEach((item) => {
    item.active = false;
  });
}
changeRoute(number:number): void{

  this.desactiveAllItemsMenu() ;
  this.listItem[number].active = true;

}

  @Output() cl = new EventEmitter<string>();
  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }

  @Output() email = new EventEmitter<string>();
  public class(s: string): string {
    let value = '';
    switch (s) {
      case 'drawer':
        value = this.clase;
        break;
      case 'modulo':
        this.clase == 'opened'
          ? (value = this.clase_modulo)
          : (value = 'modulo-close');
        break;
    }
    return value;
  }
  // public go(m: string, v: string): void {
  //   switch (m) {
  //     case 'Proveedores':
  //       switch(v) {
  //         case 'Horario de Teleconsulta':
  //           this.router.navigate(['admin/proveedores/horario-teleconsultas']);
  //           break;
  //         case 'Medicos':
  //           this.router.navigate([
  //             'admin/proveedores/medicos',
  //           ]);
  //           break;
  //         default:
  //           this.router.navigate([
  //             'admin/proveedores',
  //           ]);
  //           break;
  //       }
  //     break;
  //     case 'Atencion':
  //       switch (v) {
  //         case 'Teleconsultas':
  //           this.router.navigate(['admin/atencion/teleconsultas']);
  //           break;
  //       }
  //       break;
  //   }
  // }

  public go(m: string, v: string): void {
    switch (m) {
      case 'Proveedores':
        switch (v) {
          case 'Horario de Teleconsulta':
            this.router.navigate(['admin/proveedores/horario-teleconsultas']);
            break;
          case 'Medicos':
            this.router.navigate(['admin/proveedores/medicos']);
            break;
          default:
            this.router.navigate(['admin/proveedores']);
            break;
        }
        break;
      case 'Atencion':
        switch (v) {
          case 'Teleconsultas':
            this.router.navigate(['admin/atencion/teleconsultas']);
            break;
        }
        break;
    }
  }




  public oyc(): void {
    if (this.clase == 'opened') {
      this.clase = 'closed';
    } else {
      this.clase = 'opened';
    }
    this.cl.emit(this.clase);
  }



  public goToPage(s: string): void {
    this.router.navigate([s]);
  }


  public splitBreadcrumbsUrl(s: string): any {
    let d = s.split('/');
    let w = d.slice(1, 9);
    return w;
  }
}
