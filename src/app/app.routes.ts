import { Routes } from '@angular/router';
import {LoginComponent} from "./security/login/login.component";
import {publicGuard} from "./security/guards/public.guard";
import {SignupComponent} from "./security/signup/signup.component";
import { HomeComponent } from './pages/home/home.component';
import { privateGuard } from './security/guards/private.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import {ServiceComponent} from "./pages/service/service.component";
import {RegisterComponent} from "./pages/register/register.component";

export const routes: Routes = [

  { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [publicGuard] },
  { path: "singup", component: SignupComponent, pathMatch: "full", canActivate: [publicGuard] },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [privateGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'configuration', component: ConfigurationComponent },
      { path: 'register/:hash', component: RegisterComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
