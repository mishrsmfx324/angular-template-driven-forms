import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TemplateDrivenFromComponent } from './app/form/template-driven-from/template-driven-from.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateDrivenFromComponent],
  template: `
    <app-template-driven-from></app-template-driven-from>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
