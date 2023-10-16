import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public clase: string = 'max';

  oyc(s: string): void {
    if (s == 'opened') {
      this.clase = 'max';
    } else {
      this.clase = 'min';
    }}





  class(): string {
    return this.clase;
  }
}
