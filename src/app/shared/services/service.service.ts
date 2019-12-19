import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    usersUrl = 'https://reqres.in/api/users';


  constructor(private http: HttpClient) { } 
  
  criar(user: any) {
   return this.http.post(this.usersUrl, user);
  
}

}
