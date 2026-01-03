import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsList } from './components/products-list/products-list';

export const routes: Routes = [
    { path: '', component: Home, title: 'Estoque' },
    { path: 'products', component: ProductsList, title: 'produto'}
];
