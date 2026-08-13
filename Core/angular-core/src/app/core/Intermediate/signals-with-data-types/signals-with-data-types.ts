import { Component, signal } from '@angular/core';

interface IStudents {
  name: string;
  age: number;
  isActive: boolean;
}

@Component({
  selector: 'app-signals-with-data-types',
  imports: [],
  templateUrl: './signals-with-data-types.html',
  styleUrl: './signals-with-data-types.scss',
})
export class SignalsWithDataTypes {
  count = signal<number>(0); //Define the type of data in signals
  name = signal<string>('Angular');
  isAdmin = signal<boolean>(true);

  numbers = signal<number[]>([10, 20, 30]);
  user = signal<{ name: string; age: number }>({ name: 'akshay', age: 25 });

  users = signal<{ name: string; age: number }[]>([
    { name: 'akshay', age: 25 },
    { name: 'tester', age: 24 },
  ]);

  students = signal<IStudents[]>([
    { name: 'tester', age: 23, isActive: false },
    { name: 'userd', age: 34, isActive: true },
  ]);

  // set()
  // Used to replace the current Signal value with a new value.

  // update()
  // Used when the new value depends on the current value.
  // It receives the current value and returns the new value.

  directupdate() {
    this.count.set(10);
    
    this.name.set('ChangedName');
    
    this.isAdmin.set(false);
  
    this.numbers.set([20, 403, 5543]);
   
    this.user.set({ name: 'changeName', age: 34 });

    this.users.set([
      { name: 'changedName1', age: 24 },
      { name: 'hey you', age: 34 },
    ]);

    this.students.set([
      { name: 'tester', age: 34, isActive: false },
      { name: 'tsfddf', age: 352, isActive: true },
    ]);
  }

  addValues(){
    this.count.update((c) => c + 1);

    this.name.update(c=> c.concat(' Gaikwad'));
    
    this.isAdmin.update(() => false);
    
    this.numbers.update(arr => [...arr, 500]);

    this.user.update(c=> 
    ({
      name: 'addedcalledname',
      age: 35
    })
    )

    this.users.update(arr => [...arr, 
      {
        name: 'heyadded name',
        age: 43
      },
      {
        name: 'you are best',
        age: 34
      }
    ])

    this.students.update(c=> (
      [
        ...c,
        {
          name: 'heyt you ',
          age:34,
          isActive: false
        },
        {
          name: 'newly added',
          age:34,
          isActive: false
        }
      ]
    ))
  }
}
