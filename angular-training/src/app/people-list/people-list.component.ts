import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {

  showList: boolean = true;
  people=[
    {name: 'John', age: 25, hairColor: 'brown'},
    {name: 'Jane', age: 30, hairColor: 'black'},
    {name: 'Jim', age: 35, hairColor: 'blonde'}
  ]

}
