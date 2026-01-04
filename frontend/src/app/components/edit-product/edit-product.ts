import { Component, inject, Input } from '@angular/core';
import { ProductService } from '../../service/product-service/product-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../interface/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.scss',
})
export class EditProduct {

  productService = inject(ProductService);
  activeModal = inject(NgbActiveModal);

  @Input() product!: Product; 
  
  editProduct(){
    this.productService.editProduct(this.product).subscribe({
      next: (data : Product) => {
        this.activeModal.close()
      }
    })
  }

  validation(){
    return this.product.name != "" && this.product.category != "" && this.product.description != ""; 
  }
}
