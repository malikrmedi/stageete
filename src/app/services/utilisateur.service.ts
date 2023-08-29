import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private HttpClient: HttpClient) { }

  getallUsers():Observable<any[]>{
    return this.HttpClient.get<any>("https://localhost:7235/users/getallusers")
  }

  ajouterUtilisateur(utilisateur: any): Observable<any> {
    return this.HttpClient.post<any>("https://localhost:7235/users", utilisateur);
  }




}
