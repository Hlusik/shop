import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';
import { CartService } from 'src/app/CartModule/services/cart.service';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
    product: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private cartService: CartService
    ) {}

    ngOnInit(): void {
        this.product = new Product();

        // when router destroys this component, it handles subscriptions automatically
        const observer = {
            next: (product: Product) => (this.product = { ...product }),
            error: (err: any) => console.log(err)
        };
        this.route.paramMap
            .pipe(
                switchMap((params: ParamMap) => this.productService.getProduct(+params.get('productID'))))
            .subscribe(observer);
    }

    onGoBack(): void {
        this.router.navigate(['/product-list']);
    }

    public onBuy(): void {
        this.cartService.addProduct(this.product);
    }

}
