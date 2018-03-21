import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

   porcentaje1: number = 50;
   porcentaje2: number = 20;
  constructor() { }

  ngOnInit() {
  }


  // cambiarValor(numero) {
  //   if ( this.porcentaje >= 100 && numero > 0 ) {
  //     this.porcentaje = 100;
  //     return;
  //   }
  //   if ( this.porcentaje <= 0 && numero < 0 ) {
  //     this.porcentaje = 0;
  //     return;
  //   }
  // this.porcentaje = this.porcentaje + numero;
  // }

}
