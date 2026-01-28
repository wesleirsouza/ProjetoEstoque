import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { NgbActiveModal, NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { StockEntry } from '../../interface/stock-entry';
import { Supplier } from '../../interface/supplier';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';
import { FormsModule } from '@angular/forms';
import { StockEntryItem } from '../../interface/stock-entry-item';

@Component({
  selector: 'app-create-stock-entry',
  imports: [FormsModule, NgbAlert],
  templateUrl: './create-stock-entry.html',
  styleUrl: './create-stock-entry.scss',
})
export class CreateStockEntry {

  constructor(private cdr: ChangeDetectorRef) {}

  stockEntryService = inject(StockEntryService);
  activeModal = inject(NgbActiveModal);
  supplierService = inject(SupplierService);
  productService = inject(ProductService);

   supplier : Supplier = {
    id: null,
    name: '',
    cnpj: ''
  } 

  newStock : StockEntry = {
    id: null,
    supplier: this.supplier,
    entryDate: null,
    items: []
  }

   selectedProduct : Product = {
    id: null,
    name: '',
    description: '',
    category: '',
    stockInitial: null
  }

  listSupplier : Supplier[] = [];
  listProduct : Product[]= [];
  amountProduct : number | null = null; 
  value : number | null = null;
  showAlert = false;

  ngOnInit(){
    this.supplierService.findAll().subscribe({
      next : (data : Supplier[]) => {
        this.listSupplier = data;
        this.cdr.detectChanges();
      }
    });
    this.productService.findAll().subscribe({
      next : (data : Product[]) =>{
        this.listProduct = data;
        this.cdr.detectChanges();
      }
    })
  }
  
   saveStockEntry(){
    if(this.newStock.items.length > 0){
      this.stockEntryService.createStock(this.newStock).subscribe({
        next: (data : StockEntry) => {
          this.activeModal.close()
        }
      })
    }else{
      this.showAlertMessage();
    }
    }
  
    validation(){
      return this.newStock.items && this.newStock.supplier.name && this.newStock.entryDate; 
    }

    includeStockEntryItem(){
      if(this.selectedProduct != null && this.amountProduct != null && this.value != null){
        let stockEntryItem : StockEntryItem = {
          id: null,
          product: this.selectedProduct,
          quantity: this.amountProduct,
          unitPrice: this.value
        }
        this.newStock.items.push(stockEntryItem);
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