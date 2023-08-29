import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private HttpClient: HttpClient) { }
  getallproducts():Observable<any[]>{
    return this.HttpClient.get<any>("https://localhost:7235/produits/getallproducts")
  }
}
