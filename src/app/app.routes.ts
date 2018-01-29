
import { RouterModule ,  Routes } from '@angular/router';

import { PagesComponent } from './component/pages/pages.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/login/register.component';
import { NopagefoundComponent } from './component/shared/nopagefound/nopagefound.component';




const appROUTES: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: PagesComponent },
  //  { path: '', redirectTo: '/pages', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appROUTES , {useHash: true});
