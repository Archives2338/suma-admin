import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
public diasAntes: Date = new Date();
public inicio: Date = new Date();
public fin: Date = new Date();
@Output() range = new EventEmitter<any>();
ngOnInit(): void {
// this.diasAntes.setDate(this.diasAntes.getDate() - 4);
this.diasAntes.setDate(this.diasAntes.getDate() - 300);

}

public filter(): void {
  this.range.emit({ fecha_inicio: this.inicio.toLocaleDateString('fr-CA'), fecha_fin: this.fin.toLocaleDateString('fr-CA') });

}

}
