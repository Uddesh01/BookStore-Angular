import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  constructor(public httpClient: HttpClient) {}

  baseUrl: string = "https://localhost:7028/api/"

  private authHeader = new HttpHeaders({
    'Accept': "application/json",
    Authorization: `Bearer ${localStorage.getItem('authToken')}` || ""
  })

  // loginSiginUpCall(endpoint: string, data: object): Observable<any> {
  //   return this.httpClient.post(this.baseUrl + endpoint, data)
  // }

  getAllNotes(endpoint:string):Observable<any>{
    console.log("I am in book service");
    return this.httpClient.get(this.baseUrl+endpoint)
  }
  

}
