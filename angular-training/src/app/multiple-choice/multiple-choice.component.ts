import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.css'
})
export class MultipleChoiceComponent {

  @Output() aClick = new EventEmitter<void>();
  @Output() bClick = new EventEmitter<void>();
  @Output() cClick = new EventEmitter<void>();
  @Output() dClick = new EventEmitter<void>();


  aClicked(): void {
    this.aClick.emit();
  }
  bClicked(): void {
   this.bClick.emit();
  }
  cClicked(): void {
    this.cClick.emit();
  }
  dClicked(): void {
    this.dClick.emit();
  }
}
