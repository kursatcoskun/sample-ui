import { Component, Input } from "@angular/core";

@Component({
  selector: 'sample-component',
  template: `
    <h1>{{ label }}</h1>
  `,
  styles: [
  ]
})
export class SampleComponent {

  @Input() label = 'Sample Label';

}
