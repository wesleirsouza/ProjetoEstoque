import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';
import { CreateProduct } from '../create-product/create-product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProduct } from '../edit-product/edit-product';
import { DeleteProduct } from '../delete-product/delete-product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products-list',
  imports: [FormsModule],
  templateUrl: './products-list.html',
  styleUrl: './products-list.scss',
})
export class ProductsList {

  constructor(private cdr: ChangeDetectorRef) {}

  productService = inject(ProductService);
  listProducts : Product[] = []; 
  modalService = inject(NgbModal);

  inputfiltering: string = "";
  filteredList : Product[] = [];

  ngOnInit(){
    this.productService.findAll().subscribe({
      next : (data : Product[]) => {
        this.listProducts = data;
        this.filteredList = data;
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

  openModalEdit(
    product : Product, 
    dialogSize: 'sm' | 'lg' | 'md' = 'md'
  ){
    const modalRef = this.modalService.open(EditProduct, {
      size: dialogSize,
      centered: false,
    });
    modalRef.componentInstance.product = product;
    return modalRef.result.then(() => {
      this.ngOnInit();
    })
  }
  
  
  openModalDelete(
    product : Product, 
    dialogSize: 'sm' | 'lg' | 'md' = 'md'
  ){
    const modalRef = this.modalService.open(DeleteProduct, {
      size: dialogSize,
      centered: false,
    });
    modalRef.componentInstance.product = product;
    return modalRef.result.then(() => {
      this.ngOnInit();
    })
  }

  filtering(){
    this.filteredList = [];
    for(let product of this.listProducts){
      if(product.category.includes(this.inputfiltering)){
        this.filteredList.push(product);
      }
    }
  }  

}
