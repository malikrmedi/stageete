import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotifgratuiteService {

  constructor(private HttpClient: HttpClient) { }

  getallmotifs():Observable<any[]>{
    return this.HttpClient.get<any>("https://localhost:7235/motifsdesortie/getallmotifs")
  }

}
