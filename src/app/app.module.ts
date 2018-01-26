import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { Graficas1Component } from './component/pages/graficas1/graficas1.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './component/shared/breadcrumbs/breadcrumbs.component';
import { ProgressComponent } from './component/pages/progress/progress.component';
import { PagesComponent } from './component/pages/pages.component';
import { RegisterComponent } from './component/login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    ProgressComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
