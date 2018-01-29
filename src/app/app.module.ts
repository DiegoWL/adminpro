import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';
import { PAGES_ROUTES } from './component/pages/pages.routes';

// modulos
import { PagesModule } from './component/pages/pages.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/login/register.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { SidebarComponent } from './component/shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './component/shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [BrowserModule, APP_ROUTES , PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
