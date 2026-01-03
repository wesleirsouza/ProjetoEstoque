import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductService } from '../../service/product-service/product-service';
import { Product } from '../../interface/product';


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

  ngOnInit(){
    this.productService.findAll().subscribe({
      next : (data : Product[]) => {
        this.listProducts = data;
        this.cdr.detectChanges();
      }
    });
  }
}
