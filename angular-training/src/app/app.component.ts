import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CounterComponent } from './counter/counter.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, PeopleListComponent, 
    EventHandlingComponent, MultipleChoiceComponent, CounterComponent,
   CongratulationsComponent, CommonModule],

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

  count: number = 0;
  threshold: number = 10;

  incrementNumber(): void {
    this.count++;
  }

  decrementNumber(): void {
    this.count--;
  }
}
