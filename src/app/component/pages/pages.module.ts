import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
// rutas
import { PAGES_ROUTES } from './pages.routes';

import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../incrementador/incrementador.component';
import { GraficoDonasComponent } from '../grafico-donas/grafico-donas.component';


@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    DashboardComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonasComponent
  ],
  exports: [ProgressComponent, DashboardComponent, Graficas1Component],
  imports: [SharedModule, PAGES_ROUTES, FormsModule , ChartsModule , BrowserModule]
})
export class PagesModule {}
