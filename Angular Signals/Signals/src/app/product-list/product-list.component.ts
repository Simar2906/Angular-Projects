import { Component, signal, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../products';
@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = input.required<Product[]>();

  filteredProducts = computed(() =>{
    return this.products().filter(product => product.name.includes("Milk"));
  })
}
