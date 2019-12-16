import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    contatosURL = 'https://reqres.in/api/users';


  constructor(private http: HttpClient) { } 

  criar(contato: any) {
    return this.http.post(this.contatosURL, contato);
  }

}
