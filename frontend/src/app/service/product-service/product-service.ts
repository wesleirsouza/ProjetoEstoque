import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../interface/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/product";

  public findAll(){
    return this.http.get<Product[]>(this.apiUrl);
  }
  
}
