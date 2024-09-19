import { Directive } from '@angular/core';

@Directive({
  selector: '[appSharedBehaviour]',
  standalone: true
})
export class SharedBehaviourDirective {

  constructor() {
    console.log('Shared behavior applied');
   }
}
