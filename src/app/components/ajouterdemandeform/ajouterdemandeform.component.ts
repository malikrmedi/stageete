import { Component } from '@angular/core';
import { DemandesgratuitesService } from 'src/app/services/demandesgratuites.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-ajouterdemandeform',
  templateUrl: './ajouterdemandeform.component.html',
  styleUrls: ['./ajouterdemandeform.component.css'],
  providers:[DatePipe]
})
export class AjouterdemandeformComponent {

  nouvelleDemande: any = {
    
    date_demande: this.datePipe.transform(new Date(),'yyyy-MM-dd'),
    demandeur: 'demandeur 1',
    description_demande: '',
    destinataire: '',
    etat_demande: 'non traité',
    historique_validation: 'rien',
    motif_demande: '',
    secteur: 'test'
  };

  constructor(private demandegratuiteService: DemandesgratuitesService,private datePipe:DatePipe) {}

  onSubmit() {
    this.demandegratuiteService.ajouterDemandesG(this.nouvelleDemande).subscribe(
      response => {

        console.log('demande de gratuité ajouté avec succès', response);
      }
    );

  }
  
  

}
