import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductsList } from './components/products-list/products-list';
import { SupplierList } from './components/supplier-list/supplier-list';

export const routes: Routes = [
    { path: '', component: Home, title: 'Estoque' },
    { path: 'products', component: ProductsList, title: 'produto'},
    { path: 'supplier', component: SupplierList, title: 'fornecedor'},
];
