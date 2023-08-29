import { Component,OnInit } from '@angular/core';
import { DemandesgratuitesService } from 'src/app/services/demandesgratuites.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-listedemandedemandeur',
  templateUrl: './listedemandedemandeur.component.html',
  styleUrls: ['./listedemandedemandeur.component.css']
})
export class ListedemandedemandeurComponent implements OnInit {
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
    this.fetchDemandes();
    
  })
}



fetchDemandes() {
  this.demandeGRAT.getallDemandesG().subscribe(data => {
      this.demandesTab = data;
  });
}

supprimerDemande(demande: any) {

  this.demandeGRAT.supprimerDemande(demande.numero_demande).subscribe(response => {
      console.log('Demande supprimée !', response);
    
      this.fetchDemandes();
  });
}



}
