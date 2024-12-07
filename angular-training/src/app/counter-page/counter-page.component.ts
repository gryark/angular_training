import { Component } from '@angular/core';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [CongratulationsComponent, CounterComponent],

  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})
export class CounterPageComponent {
  count: number = 0;
  threshold: number = 10;

  incrementNumber(): void {
    this.count++;
  }

  decrementNumber(): void {
    this.count--;
  }
}
