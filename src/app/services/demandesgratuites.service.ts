import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemandesgratuitesService {

  constructor(private HttpClient: HttpClient) { }

  getallDemandesG():Observable<any[]>{
    return this.HttpClient.get<any>("https://localhost:7235/demandesgratuites/getall")
  }

  ajouterDemandesG(Demandegratuite: any): Observable<any> {
    return this.HttpClient.post<any>("https://localhost:7235/demandesgratuites", Demandegratuite);
  }

  



}
