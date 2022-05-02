import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'Pão',
    price: 1
  }

 
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
  
  }

   creatProduct(): void {

    this.productService.create(this.product).subscribe(() => {
    this.productService.showMensage('Produto Criado !');
    this.router.navigate(['/product'])
    })
  }

  cancel(): void {
    this.router.navigate(['/product'])
    this.productService.showMensage('Operação Cancelada!');
  }


}
