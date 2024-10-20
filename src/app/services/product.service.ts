import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/productos'; // URL del backend
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', // Encabezado para JSON
    }),
  };

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.apiUrl,
      JSON.stringify(product), // Convertir explícitamente a JSON
      this.httpOptions
    );
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${this.apiUrl}/${id}`,
      JSON.stringify(product), // Convertir explícitamente a JSON
      this.httpOptions
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
