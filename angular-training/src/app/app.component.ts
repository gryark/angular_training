import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, PeopleListComponent, 
    EventHandlingComponent, MultipleChoiceComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-training';

  doSomething(): void {
    alert('doSomething');
  }
  doSomethingElse(): void {
    alert('doSomethingElse');
  }
  doAnotherThing(): void {
    alert('doAnotherThing');
  }
}
