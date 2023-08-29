import { Component, OnInit } from '@angular/core';
import { DemandesgratuitesService } from 'src/app/services/demandesgratuites.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listedemanderesponsable',
  templateUrl: './listedemanderesponsable.component.html',
  styleUrls: ['./listedemanderesponsable.component.css']
})
export class ListedemanderesponsableComponent implements OnInit {
  demandesTab: any[] = [];

  constructor(
    private demandeGRAT: DemandesgratuitesService,
    private ActivatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.demandeGRAT.getallDemandesG().subscribe(data => {
      console.log(data);
      this.demandesTab = data;
      this.fetchDemandes();
    });
  }

  traiterDemande(demande: any, action: string) {
    console.log('Demande traitée:', demande);
    console.log('Action:', action);
    
    // Appel de la méthode pour mettre à jour la demande avec l'action spécifiée
    this.demandeGRAT.updateDemandeG(demande, action).subscribe(response => {
      console.log('Réponse de mise à jour:', response);
      
      // Rafraîchir la liste des demandes après la mise à jour
      this.fetchDemandes();
    });
  }

  fetchDemandes() {
    this.demandeGRAT.getallDemandesG().subscribe(data => {
      this.demandesTab = data;
    });
  }
}
