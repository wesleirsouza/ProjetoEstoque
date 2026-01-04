import { Component, inject } from '@angular/core';
import { Product } from '../../interface/product';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../service/product-service/product-service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.scss',
})
export class CreateProduct {

  productService = inject(ProductService);
   activeModal = inject(NgbActiveModal);

  newProduct : Product = {
    id: null,
    name: '',
    description: '',
    category: '',
    stockInitial: null
  };

  saveProduct(){
    this.productService.createProduct(this.newProduct).subscribe({
      next: (data : Product) => {
        this.activeModal.close()
      }
    })
  }

}
