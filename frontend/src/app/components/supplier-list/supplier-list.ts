import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { SupplierService } from '../../service/supplier-service/supplier-service';
import { Supplier } from '../../interface/supplier';
import { CreateSupplier } from '../create-supplier/create-supplier';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  modalService = inject(NgbModal);

  ngOnInit(){
    this.supplierService.findAll().subscribe({
      next: (data : Supplier[]) => {
        this.listSupplier = data;
        this.cdr.detectChanges();
      }
    });
  }

  openModalCreate(
      dialogSize: 'sm' | 'lg' | 'md' = 'md'
    ){
      const modalRef = this.modalService.open(CreateSupplier, {
        size: dialogSize,
        centered: false,
      });
      return modalRef.result.then(() => {
        this.ngOnInit();
      })
    }

}
