import { ChangeDetectorRef, Component, inject, Input } from '@angular/core';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { NgbActiveModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { StockEntry } from '../../interface/stock-entry';
import { FormsModule } from '@angular/forms';
import { Product } from '../../interface/product';
import { ProductService } from '../../service/product-service/product-service';
import { StockEntryItem } from '../../interface/stock-entry-item';

@Component({
  selector: 'app-edit-stock-entry',
  imports: [FormsModule, NgbAlert],
  templateUrl: './edit-stock-entry.html',
  styleUrl: './edit-stock-entry.scss',
})
export class EditStockEntry {

  constructor(private cdr: ChangeDetectorRef) {}

  stockEntryService = inject(StockEntryService);
  activeModal = inject(NgbActiveModal);
  productService = inject(ProductService);

  @Input() stockEntry! : StockEntry;

  listProduct : Product[]= [];
  amountProduct : number | null = null; 
  value : number | null = null;
  showAlert = false;

   selectedProduct : Product = {
    id: null,
    name: '',
    description: '',
    category: '',
    stockInitial: null
  }

    validation(){
      return this.stockEntry.items && this.stockEntry.supplier.name && this.stockEntry.entryDate;
    }
    ngOnInit(){
      this.productService.findAll().subscribe({
      next : (data : Product[]) =>{
        this.listProduct = data;
        this.cdr.detectChanges();
      }
    })
    }

    includeStockEntryItem(){
          if(this.selectedProduct != null && this.amountProduct != null && this.value != null){
            let stockEntryItem : StockEntryItem = {
              id: null,
              product: this.selectedProduct,
              quantity: this.amountProduct,
              unitPrice: this.value
            }
            this.stockEntry.items.push(stockEntryItem);
          }else{
            this.showAlertMessage();
          }
        }
      
    saveStockEntry(){
    if(this.stockEntry.items.length > 0){
      this.stockEntryService.editStock(this.stockEntry).subscribe({
        next: (data : StockEntry) => {
          this.activeModal.close()
        }
      })
    }else{
      this.showAlertMessage();
    }
    }

    showAlertMessage() {
      this.showAlert = true;

    setTimeout(() => {
        this.closeAlert();
      }, 3000);
    }

    closeAlert() {
      this.showAlert = false;
    }
  }  