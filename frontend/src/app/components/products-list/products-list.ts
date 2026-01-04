import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';
import { CreateProduct } from '../create-product/create-product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {

  constructor(private cdr: ChangeDetectorRef) {}

  productService = inject(ProductService);
  listProducts : Product[] = []; 
  modalService = inject(NgbModal);

  ngOnInit(){
    this.productService.findAll().subscribe({
      next : (data : Product[]) => {
        this.listProducts = data;
        this.cdr.detectChanges();
      }
    });
  }

  openModalCreate(
    dialogSize: 'sm' | 'lg' | 'md' = 'md'
  ){
    const modalRef = this.modalService.open(CreateProduct, {
      size: dialogSize,
      centered: false,
    });
    return modalRef.result.then(() => {
      this.ngOnInit();
    })
  }
}
