import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { CounterComponent } from './counter/counter.component';
import { CongratulationsComponent } from './congratulations/congratulations.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponent, PeopleListComponent, 
   CongratulationsComponent, CommonModule, NavbarComponent, UserInfoFormComponent, UserInfoDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
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
function withInterceptorsFromDi(): import("@angular/common/http").HttpFeature<import("@angular/common/http").HttpFeatureKind> {
  throw new Error('Function not implemented.');
}

