import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private HttpClient: HttpClient) { }

  getallmarques():Observable<any[]>{
    return this.HttpClient.get<any>("https://localhost:7235/marques/getallmarques")
  }
}
