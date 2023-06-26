import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent {
  dataa: string = 'yellow';
  name: string = '';
  price: string = '';
  product: Product = new Product();
  Click(e: Event) {
    this.dataa = (e.target as HTMLInputElement).value;


  }
  clickMe() {
    this.product.name = this.name;
    this.product.price = this.price;
    console.log("see the data from input", this.product.name + "  " + this.product.price);
  }
}
