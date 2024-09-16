import { Component, signal, effect, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../products';
import { ProductListComponent } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Signals';

  theme = signal('light');
  label = this.theme();

  price = 19;

  quantity = signal(10);

  totalPrice = computed(() => this.price * this.quantity());

  products = signal([
    {
      id:1, name:"Milk", price:1.45
    },
    {
      id:2, name:"Bread", price:3.90
    },
    {
      id:3, name:"Tomatoes", price:2.20
    },
  ])

  filterName = signal('');

  filteredProducts = computed(() =>{
    return this.products().filter(product => product.name.toLowerCase().includes(
      this.filterName().toLowerCase()
    ))
  })

  allProducts:Product[] = [
    {
      id:1, name:"Milk", price:1.45
    },
    {
      id:2, name:"Bread", price:3.90
    },
    {
      id:3, name:"Tomatoes", price:2.20
    },
  ];

  constructor() {
    effect(()=>{
      this.label = this.theme();
    });
    
  }
  toggleDarkMode(){
    this.theme.update(currentValue => currentValue === 'light'?'dark':'light');
  }
  changeQuantity(event:Event){
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }

  changeFilter(event:Event){
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}
