import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = signal(0);

  increment() {
    //this.count.set(this.count() + 1);
    //or
    this.count.update((current) => current+1);
  }
}
