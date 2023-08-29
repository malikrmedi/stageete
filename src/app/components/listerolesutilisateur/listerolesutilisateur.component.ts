import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RoleutilisateurService } from 'src/app/services/roleutilisateur.service';

@Component({
  selector: 'app-listerolesutilisateur',
  templateUrl: './listerolesutilisateur.component.html',
  styleUrls: ['./listerolesutilisateur.component.css']
})
export class ListerolesutilisateurComponent implements OnInit {
  rolesTab:any=[]
  constructor(
    private roleutilisateur: RoleutilisateurService,
    private ActivatedRouter:ActivatedRoute,
    private router:Router

  ){}

ngOnInit(){
  this.roleutilisateur.getallrolesutilisateurs().subscribe(data=>{
    console.log(data);
    this.rolesTab=data;
    
    
  })
}
}
