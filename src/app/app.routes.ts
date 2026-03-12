import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadComponent: () => import('../components/home/home').then(m => m.Home)},
    {path: 'products', loadComponent: () => import('../components/products/products').then(m => m.Products)},
    {path: 'contact', loadComponent: () => import('../components/contact/contact').then(m => m.Contact)},
    {path: '**', loadComponent: () => import('../components/notfound/notfound').then(m => m.Notfound)},
];
