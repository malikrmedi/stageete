import { Component,OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listeproduits',
  templateUrl: './listeproduits.component.html',
  styleUrls: ['./listeproduits.component.css']
})
export class ListeproduitsComponent implements OnInit{
  produitsTab:any=[]
  constructor(
    private produits: ProduitService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.produits.getallproducts().subscribe(data=>{
    console.log(data);
    this.produitsTab=data;
    
  })
}

}
