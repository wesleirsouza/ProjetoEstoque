import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Supplier } from '../../interface/supplier';

@Injectable({
  providedIn: 'root',
})
export class SupplierService {

  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/supplier";

  public findAll(){
      return this.http.get<Supplier[]>(this.apiUrl);
    }
  
}
