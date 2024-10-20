import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.interface';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [CommonModule, TableModule, ButtonModule, CardModule, InputTextModule],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  @ViewChild('table') table: Table | undefined;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  filterTable(globalFilter: string): void {
    if (this.table) {
      this.table.filterGlobal(globalFilter, 'contains');
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  navigateToForm(id?: number): void {
    const url = id ? `/product-form/${id}` : '/product-form';
    this.router.navigate([url]);
  }
}
