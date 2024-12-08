import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private http: HttpClient,
  ) {}
  
  loaddData():Observable<any> {
      return this.http.get<any>('https://randomuser.me/api')
  }
   

  
}
