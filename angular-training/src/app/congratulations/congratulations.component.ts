import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.css'
})
export class CongratulationsComponent {

  @Input() count: number = 0;
  @Input() threshold: number = 0;
}
