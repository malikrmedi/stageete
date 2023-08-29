import { Component } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';




@Component({
  selector: 'app-ajouteruserform',
  templateUrl: './ajouteruserform.component.html',
  styleUrls: ['./ajouteruserform.component.css']
})
export class AjouteruserformComponent {
  nouvelUtilisateur: any = {
    nom: '',
    prenom: '',
    matricule: '',
    email: '',
    fonction: '',
    societe: '',
    direction: '',
    superieurHierarchique: '',
    motdepasse: '',
    statut: '',
    secteur:'',
  };

  constructor(private utilisateurService: UtilisateurService) {}

  onSubmit() {
    this.utilisateurService.ajouterUtilisateur(this.nouvelUtilisateur).subscribe(
      response => {

        console.log('Utilisateur ajouté avec succès', response);
      }
    );

  }
}
