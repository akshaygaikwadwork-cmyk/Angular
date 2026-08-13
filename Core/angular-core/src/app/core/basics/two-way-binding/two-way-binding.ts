import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.scss',
})
export class TwoWayBinding {
 // Old way of Two way binding - using FormsModule (ngModule)
 username : string = 'Akshay';

//  New way of Two way data binding
name = signal<string>('Angular');

user = signal<{name: string, age: number}>({
  name: 'Akshay', age: 25
})

updateName(val: string){
  this.user.update(user=> ({...user, name: val}));
}

updateAge(){
  this.user.update(user => ({...user, age: user.age+1}));
}
}
