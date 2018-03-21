import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grafico-donas',
  templateUrl: './grafico-donas.component.html',
  styles: []
})
export class GraficoDonasComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';

  constructor() {}

  ngOnInit() {}
}
