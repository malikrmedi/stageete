import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interfacelogin',
  templateUrl: './interfacelogin.component.html',
  styleUrls: ['./interfacelogin.component.css']
})
export class InterfaceloginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === this.password) {
      if (this.username === 'admin') {
        this.router.navigate(['/acceuiladmin']); // Redirection vers la page d'accueil de l'admin
      } else if (this.username === 'responsable') {
        this.router.navigate(['/acceuilresponsable']); // Redirection vers la page de listes de demandes du responsable
      } else if (this.username === 'demandeur') {
        this.router.navigate(['/acceuildemandeur']); // Redirection vers la page de listes de demandes du demandeur
      }
    } else {
      console.log('Identifiant ou mot de passe incorrect');
    }
  }
}
