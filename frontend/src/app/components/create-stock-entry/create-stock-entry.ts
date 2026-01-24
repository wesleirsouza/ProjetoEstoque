import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { StockEntryService } from '../../service/stockEntryService/stock-entry-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StockEntry } from '../../interface/stock-entry';
import { Supplier } from '../../interface/supplier';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';
import { FormsModule } from '@angular/forms';
import { StockEntryItem } from '../../interface/stock-entry-item';

@Component({
  selector: 'app-create-stock-entry',
  imports: [FormsModule],
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
  listProdut : Product[]= [];
  amountProduct : number | null = null; 
  value : number | null = null;

  ngOnInit(){
    this.supplierService.findAll().subscribe({
      next : (data : Supplier[]) => {
        this.listSupplier = data;
        this.cdr.detectChanges();
      }
    });
    this.productService.findAll().subscribe({
      next : (data : Product[]) =>{
        this.listProdut = data;
        this.cdr.detectChanges();
      }
    })
  }
  
   saveStockEntry(){
      this.stockEntryService.createStock(this.newStock).subscribe({
        next: (data : StockEntry) => {
          this.activeModal.close()
        }
      })
    }
  
    validation(){
      return this.newStock.items && this.newStock.supplier.name && this.newStock.entryDate; 
    }

    includeStockEntryItem(){
      let stockEntryItem : StockEntryItem = {
        id: null,
        product: this.selectedProduct,
        quantity: this.amountProduct,
        unitPrice: this.value
      }
      this.newStock.items.push(stockEntryItem);
    }
  }