import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>
      <app-product></app-product>
    </h1>
  </div>
  `
})
export class AppComponent {
  title:string = 'Nasz magazyn';
}

