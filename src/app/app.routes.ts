
import { RouterModule ,  Routes } from '@angular/router';

import { PagesComponent } from './component/pages/pages.component';
import { DashboardComponent } from './component/pages/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { Graficas1Component } from './component/pages/graficas1/graficas1.component';
import { ProgressComponent } from './component/pages/progress/progress.component';
import { NopagefoundComponent } from './component/nopagefound/nopagefound.component';
import { RegisterComponent } from './component/login/register.component';



const appROUTES: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component }
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PagesComponent },
  //  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appROUTES , {useHash: true});
