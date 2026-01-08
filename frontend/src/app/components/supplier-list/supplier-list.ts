import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { Supplier } from '../../interface/supplier';

@Component({
  selector: 'app-supplier-list',
  imports: [],
  templateUrl: './supplier-list.html',
  styleUrl: './supplier-list.scss',
})
export class SupplierList {
  constructor(private cdr: ChangeDetectorRef) {}

  supplierService = inject(SupplierService);
  listSupplier : Supplier[] = [];

  ngOnInit(){
    this.supplierService.findAll().subscribe({
      next: (data : Supplier[]) => {
        this.listSupplier = data;
         this.cdr.detectChanges();
      }
    })
  }

}
