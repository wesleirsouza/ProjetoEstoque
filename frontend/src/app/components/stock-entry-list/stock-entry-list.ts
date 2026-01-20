import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StockEntry } from '../../interface/stock-entry';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-stock-entry-list',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './stock-entry-list.html',
  styleUrl: './stock-entry-list.scss',
})
export class StockEntryList {
  constructor(private cdr: ChangeDetectorRef) {}

  listStockEntry : StockEntry[] = [];
  stockEntryListService = inject(StockEntryService);

  ngOnInit(){
    this.stockEntryListService.findAll().subscribe({
      next : (data : StockEntry[]) => {
        this.listStockEntry = data;
        this.cdr.detectChanges();
      }
    })
  }
}
