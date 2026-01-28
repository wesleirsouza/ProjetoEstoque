import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StockEntry } from '../../interface/stock-entry';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateStockEntry } from '../create-stock-entry/create-stock-entry';
import { DeleteStockEntry } from '../delete-stock-entry/delete-stock-entry';
import { EditStockEntry } from '../edit-stock-entry/edit-stock-entry';

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

  openModalDelete(
      stockEntry : StockEntry, 
      dialogSize: 'sm' | 'lg' | 'md' = 'md'
    ){
      const modalRef = this.modalService.open(DeleteStockEntry, {
        size: dialogSize,
        centered: false,
      });
      modalRef.componentInstance.stockEntry = stockEntry;
      return modalRef.result.then(() => {
        this.ngOnInit();
      })
    }

  openModalEdit(
      stockEntry : StockEntry, 
      dialogSize: 'sm' | 'lg' | 'md' = 'lg'
    ){
      const modalRef = this.modalService.open(EditStockEntry, {
        size: dialogSize,
        centered: false,
      });
      modalRef.componentInstance.stockEntry = stockEntry;
      return modalRef.result.then(() => {
        this.ngOnInit();
      })
    }  
}
