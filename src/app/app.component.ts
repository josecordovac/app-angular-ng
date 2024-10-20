import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  template: `
    <h1>Gestión de Productos</h1>
    <router-outlet></router-outlet> <!-- Aquí se muestran las vistas basadas en la ruta -->
  `
})
export class AppComponent {}
