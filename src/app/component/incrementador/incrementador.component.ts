import { Component, OnInit, Input, Output, EventEmitter, ViewChild , ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

 @Output() cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onChanges( newValue: number) {
    console.log(newValue);

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    } else if ( newValue <= 0 ) {
        this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }


  cambiarValor(numero) {
    if (this.porcentaje >= 100 && numero > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && numero < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + numero;

    this.cambioValor.emit(this.porcentaje);
  }
}
