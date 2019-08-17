import {RouterModule, ROUTES, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulosComponent  } from './components/modulos/modulos.component';
import { AboutComponent  } from './components/about/about.component';
import { ModuloComponent  } from './components/modulo/modulo.component';

const APP_ROUTES: Routes = [
    { path:'home',component:HomeComponent},
    { path:'modulos',component: ModulosComponent},
    { path:'modulo/:id',component: ModuloComponent},
    { path:'about',component: AboutComponent},
    { path:'**' , pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true} );