import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <app-product></app-product>
  </div>
  `
})
export class AppComponent {
  title:string = 'Nasz magazyn';
}

