import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const appRoutes: Routes = [
  { path: '', component: ProductListComponent }, // Página principal
  { path: 'product-form', component: ProductFormComponent }, // Formulario para agregar producto
  { path: 'product-form/:id', component: ProductFormComponent }, // Formulario para editar producto
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirigir rutas no encontradas
];
