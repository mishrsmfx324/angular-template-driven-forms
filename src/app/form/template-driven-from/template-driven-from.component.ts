import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-from",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./template-driven-from.component.html",
  styleUrl: "./template-driven-from.component.css",
})
export class TemplateDrivenFromComponent {

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.controls);
    console.log(form.value);
    console.log("form is submitted");
  }
}
