import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  imports: [],
  templateUrl: './event-handling.html',
  styleUrl: './event-handling.scss',
})
export class EventHandling {

  //Click event handler method
  handleClick() {
    console.log('Button clicked!');
  }

  //Input event handler method
  onTyping(event: any) {
    console.log('User is typing:', event.target.value);
  }
  //Input event handler method
  onKeyUp(event: any) {
    console.log('Key up event:', event.key);
  }

  //Mouse Over event handler method
  onMouseOver(event: any) {
    console.log('Mouse over event:', event);
  }

  //Mouse Leave event handler method
  onMouseLeave(event: any) {
    console.log('Mouse leave event:', event);
  }

  //Blur event handler method
  onBlur(event: any) {
    console.log('Input field lost focus:', event);
  }

  //On Focus event handler method
  onFocus(event: any) {
    console.log('Input field gained focus:', event);
  }

}
