import { Component, inject, Input } from '@angular/core';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from '../../interface/supplier';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-supplier',
  imports: [FormsModule],
  templateUrl: './edit-supplier.html',
  styleUrl: './edit-supplier.scss',
})
export class EditSupplier {

  supplierService = inject(SupplierService);
  activeModal = inject(NgbActiveModal);

  @Input() supplier! : Supplier; 
  
  editSupplier(){
    this.supplierService.editSupplier(this.supplier).subscribe({
      next: (data : Supplier) => {
        this.activeModal.close()
      }
    })
  }

  validation(){
    return this.supplier.name!= "" && this.supplier.cnpj!= ""; 
  }
}
