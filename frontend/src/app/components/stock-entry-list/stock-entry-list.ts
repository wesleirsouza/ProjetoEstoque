import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StockEntry } from '../../interface/stock-entry';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateStockEntry } from '../create-stock-entry/create-stock-entry';

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
  modalService = inject(NgbModal);

  ngOnInit(){
    this.stockEntryListService.findAll().subscribe({
      next : (data : StockEntry[]) => {
        this.listStockEntry = data;
        this.cdr.detectChanges();
      }
    })
  }

  openModalCreate(
      dialogSize: 'sm' | 'lg' | 'md' = 'lg'
    ){
      const modalRef = this.modalService.open(CreateStockEntry, {
        size: dialogSize,
        centered: false,
      });
      return modalRef.result.then(() => {
        this.ngOnInit();
      })
    }
}
