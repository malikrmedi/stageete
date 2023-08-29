import { Component,OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listeutilisateurs',
  templateUrl: './listeutilisateurs.component.html',
  styleUrls: ['./listeutilisateurs.component.css']
})
export class ListeutilisateursComponent implements OnInit {

  UtilisateursTab:any=[]
  constructor(
    private utilisateur: UtilisateurService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.utilisateur.getallUsers().subscribe(data=>{
    console.log(data);
    this.UtilisateursTab=(data)
    console.log(this.UtilisateursTab);
    
  })
}

}
