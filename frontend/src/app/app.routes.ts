import { Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layout/home-layout/home-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {path: '' , component: HomeLayoutComponent, pathMatch:'full'},
    {path:'*' , component:NotFoundComponent}
];
