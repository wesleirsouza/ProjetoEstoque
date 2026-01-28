import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StockEntry } from '../../interface/stock-entry';

@Injectable({
  providedIn: 'root',
})
export class StockEntryService {
  
  private http = inject(HttpClient);
  private apiUrl = "http://localhost:8080/api/stock-entry";

  public findAll(){
    return this.http.get<StockEntry[]>(this.apiUrl);
  } 

  createStock(stockEntry : StockEntry){
    return this.http.post<StockEntry>(this.apiUrl + "/" + stockEntry.supplier.id, stockEntry.items)
  }

  deleteStock(stockEntry : StockEntry){
    return this.http.delete<StockEntry>(this.apiUrl + "/" + stockEntry.id)
  }
}
