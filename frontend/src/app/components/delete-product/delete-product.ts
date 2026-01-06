import { Component, inject, Input, input } from '@angular/core';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-product',
  imports: [],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.scss',
})
export class DeleteProduct {

  productService = inject(ProductService);
  activeModal = inject(NgbActiveModal);

  @Input() product!: Product;

  deleteProduct(){
    this.productService.deleteProduct(this.product).subscribe({
      next: () => {
        this.activeModal.close()
      }
    })
  }
}
