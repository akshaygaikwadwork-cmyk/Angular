import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.scss',
})
export class EventBinding {
  count = 0;
  userName = 'John Doe';

  countSignal = signal(0);

  increment() {
    this.count++; //or this.count.update((c) => c + 1);
    this.countSignal.set(this.countSignal() + 1);
  }

  showEvent(e: any) {
    console.log('Event:', e);
  }

  updateUserName(newName: string){
    this.userName = newName;
  }

  handleSubmit(e : any){
    e.preventDefault();
    console.log('Form submitted!');
  }
}

