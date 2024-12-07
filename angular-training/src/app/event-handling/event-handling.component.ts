import { Component } from '@angular/core';

@Component({
  selector: 'app-event-handling',
  standalone: true,
  imports: [],
  templateUrl: './event-handling.component.html',
  styleUrl: './event-handling.component.css'
})
export class EventHandlingComponent {
message:string = 'Hello World!';
  doSomething(message:string):void {
    alert('You clicked me! ' + message);
  }
}
