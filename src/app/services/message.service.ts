import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  sendMessage(body: any){

    return this.http.post('http://localhost:2000/sendEmail',body);
  }
}
