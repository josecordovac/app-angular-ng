import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button'; // Importar ButtonModule

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  imports: [
    FormsModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    ButtonModule,
  ],
})
export class ProductFormComponent implements OnInit {
  product: Product = { id: 0, nombre: '', descripcion: '', precio: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Mantener router como private
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProducts().subscribe((products) => {
        const found = products.find((p) => p.id === +id);
        if (found) this.product = found;
      });
    }
  }

  saveProduct(): void {
    console.log('Producto a enviar:', this.product); // Verificar el objeto
  
    if (this.product.id) {
      console.log('Invocando PUT...');
      this.productService.updateProduct(this.product.id, this.product).subscribe({
        next: () => {
          console.log('Producto actualizado');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al actualizar:', err),
      });
    } else {
      console.log('Invocando POST...');
      this.productService.addProduct(this.product).subscribe({
        next: () => {
          console.log('Producto agregado');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al agregar:', err),
      });
    }
    this.navigateToHome(); // Usar el método para navegar
  }

  // Método público que maneja la navegación
  navigateToHome() {
    this.router.navigate(['/']);
  }
}
