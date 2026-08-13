import { Component } from '@angular/core';

@Component({
  selector: 'app-get-set-input-field-value',
  imports: [],
  templateUrl: './get-set-input-field-value.html',
  styleUrl: './get-set-input-field-value.scss',
})
export class GetSetInputFieldValue {
  name: string = '';
  city: string = '';
  email: string = '';

  updateName(newName: string) {
    this.name = newName;
  }
  getEmailByFun(value: string){
    this.email = value;
  }

  //For Template Reference Variable
}
