import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListedemandesComponent } from './components/listedemandes/listedemandes.component';
import { ListeutilisateursComponent } from './components/listeutilisateurs/listeutilisateurs.component';
import { ListerolesutilisateurComponent } from './components/listerolesutilisateur/listerolesutilisateur.component';
import { ListemarquesComponent } from './components/listemarques/listemarques.component';
import { ListeproduitsComponent } from './components/listeproduits/listeproduits.component';
import { InterfaceloginComponent } from './components/interfacelogin/interfacelogin.component';
import { AjouteruserformComponent } from './components/ajouteruserform/ajouteruserform.component';
import { AjouterdemandeformComponent } from './components/ajouterdemandeform/ajouterdemandeform.component';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { ListedemandedemandeurComponent } from './components/listedemandedemandeur/listedemandedemandeur.component';
import { ListedemanderesponsableComponent } from './components/listedemanderesponsable/listedemanderesponsable.component';
import { DashboardresponsableComponent } from './components/dashboardresponsable/dashboardresponsable.component';
import { DashboarddemandeurComponent } from './components/dashboarddemandeur/dashboarddemandeur.component';
import { ListemotifsComponent } from './components/listemotifs/listemotifs.component';

const routes: Routes = [
  {path: "" ,component:InterfaceloginComponent},
  {path: "listedemandeGratuites" ,component: ListedemandesComponent},
  {path: "listeutilisateur", component:ListeutilisateursComponent},
  {path: "listerolesutilisateur", component:ListerolesutilisateurComponent},
  {path: "listemarques", component:ListemarquesComponent},
  {path: "listeproduits", component:ListeproduitsComponent},
  {path: "userajout", component:AjouteruserformComponent},
  {path: "demandeajout", component:AjouterdemandeformComponent},
  {path: "acceuiladmin", component:InterfaceadminComponent},
  {path: "listedemandedemandeur", component:ListedemandedemandeurComponent},
  {path: "listedemanderesponsable", component:ListedemanderesponsableComponent},
  {path: "acceuilresponsable", component:DashboardresponsableComponent},
  {path: "acceuildemandeur", component:DashboarddemandeurComponent},
  {path: "listemotifgratuite", component:ListemotifsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
