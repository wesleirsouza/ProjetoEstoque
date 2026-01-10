import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Supplier } from '../../interface/supplier';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-supplier',
  imports: [FormsModule],
  templateUrl: './create-supplier.html',
  styleUrl: './create-supplier.scss',
})
export class CreateSupplier {

  supplierService = inject(SupplierService);
  activeModal = inject(NgbActiveModal);

  newSupplier : Supplier = {
    id: null,
    name: '',
    cnpj: ''
  }

  saveSupplier(){
    this.supplierService.createSupplier(this.newSupplier).subscribe({
      next: (data : Supplier) => {
        this.activeModal.close()
      }
    })
  }

  validation(){
    return this.newSupplier.name != "" && this.newSupplier.cnpj; 
  }

}
