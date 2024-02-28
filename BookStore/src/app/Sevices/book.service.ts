import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpServiceService) { }

  getAllBooks() { 
    console.log("I am in book service");
    return this.httpService.getAllNotes("Book/GetAllBooks")
  }

  // loginCall(data:object)
  // {
  //  return this.httpService.loginSiginUpCall("User/Login",data)
  // }
}
