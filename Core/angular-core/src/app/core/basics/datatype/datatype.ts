import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype',
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.scss',
})
export class Datatype {
  value = 10; // type is defined as number because of the initial value assigned. TypeScript infers the type based on the initial value.
  //Compiler will throw an error if you try to redeclare 'value' with a different type in the same scope.
  //value = "mohit"; // This will cause an error because 'value' is already declared as a number. You cannot redeclare it as a string in the same scope.

  handleClick(){
    let value; // type not specified, so it can be of any type
    value = "mohit";
    //Runtime will not throw an error because 'value' is declared in a different scope (inside the function).
    value = 20; // This is valid because 'value' is declared in a different scope (inside the function).
    console.log('Button clicked! Value:', value);
  }


  name : string = "Akshay Gaikwad"; //allowws only string values
  //name = 23; // This will cause an error because 'name' is already declared as a string. You cannot redeclare it as a number in the same scope.
  age : number = 23; //allows only number values
  isActive : boolean = true; //allows only boolean values

   // Nullable / optional values
  selectedUser: string | null = null;
  email: string | undefined = undefined;

  // Arrays
  names: string[] = ["Akshay", "Rahul", "Amit"];
  marks: number[] = [80, 90, 75];

  // Tuple
  userInfo: [string, number] = ["Akshay", 23];

  // Union
  userId: string | number = 101;

  // Literal type
  status: "active" | "inactive" = "active";

  // Any — avoid when possible
  data: any = "Hello";

  // Unknown — safer alternative to any
  apiData: unknown = null;

  
// any
//  ↓
// No type safety
// TypeScript trusts you
// Use only when necessary


// unknown
//  ↓
// Type is unknown
// TypeScript forces you to check
// Safer choice when the type is genuinely unknown
result = 0;
sum(num1: number, num2: number){
  this.result = num1 + num2;
}
}

