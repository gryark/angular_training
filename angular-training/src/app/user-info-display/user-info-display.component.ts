import { Component } from '@angular/core';
import { UserInfoService } from '../user-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info-display.component.html',
  styleUrl: './user-info-display.component.css'
})
export class UserInfoDisplayComponent {
  isLoading:boolean = true;
  user:any={};
  constructor(private userInfo:UserInfoService) {}

  ngOnInit():void {
    this.userInfo.loaddData().subscribe(data => {
      console.log(data.results[0]);
      this.user = data.results[0];
      this.isLoading = false;
    });;
  }

}
