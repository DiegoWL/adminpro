import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { Graficas1Component } from './component/pages/graficas1/graficas1.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './component/shared/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashboardComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
