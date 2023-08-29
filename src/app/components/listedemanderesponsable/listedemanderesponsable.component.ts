import { Component,OnInit } from '@angular/core';
import { DemandesgratuitesService } from 'src/app/services/demandesgratuites.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listedemanderesponsable',
  templateUrl: './listedemanderesponsable.component.html',
  styleUrls: ['./listedemanderesponsable.component.css']
})
export class ListedemanderesponsableComponent implements OnInit {
  demandesTab:any=[]
  constructor(
    private demandeGRAT: DemandesgratuitesService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.demandeGRAT.getallDemandesG().subscribe(data=>{
    console.log(data);
    this.demandesTab=data;
    
  })
}
}
