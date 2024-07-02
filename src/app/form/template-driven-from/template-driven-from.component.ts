import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-template-driven-from",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./template-driven-from.component.html",
  styleUrl: "./template-driven-from.component.css",
})
export class TemplateDrivenFromComponent {

  RESET_FORM = 0;
  SET_FORM = 1;
  PATCH_FORM = 2;

  @ViewChild('f')
  userForm!: NgForm;

  preferredLocations = [{
    name: 'Dehradun',
    code: 101
  }, {
    name: 'Rishikesh',
    code: 102
  }, {
    name: 'Nainital',
    code: 103
  }];

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.controls);
    console.log(form.value);
    console.log("form is submitted");
  }

  set(task: number) {
    switch(task) {
      case this.SET_FORM:
        this.userForm.setValue({
          "basicDetails": {
              "username": "money is the one",
              "email": "money@istheone.com"
          },
          "secret": "Mother's Name?",
          "preferredLocation": this.preferredLocations[1]
      });
        break;
      case this.RESET_FORM:
        this.userForm.reset();
        break;
      case this.PATCH_FORM:
        this.userForm.form.patchValue({
          "secret": "First Pet's Name?",
          "preferredLocation": this.preferredLocations[2]
        });
        break;
      default:
    }
  }
}
