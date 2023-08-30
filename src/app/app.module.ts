import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListedemandesComponent } from './components/listedemandes/listedemandes.component';
import { ListeutilisateursComponent } from './components/listeutilisateurs/listeutilisateurs.component';
import { ListerolesComponent } from './listeroles/listeroles.component';
import { ListerolesutilisateurComponent } from './components/listerolesutilisateur/listerolesutilisateur.component';
import { ListemarquesComponent } from './components/listemarques/listemarques.component';
import { ListeproduitsComponent } from './components/listeproduits/listeproduits.component';
import { InterfaceloginComponent } from './components/interfacelogin/interfacelogin.component';
import { AjouteruserformComponent } from './components/ajouteruserform/ajouteruserform.component';
import { AjouterdemandeformComponent } from './components/ajouterdemandeform/ajouterdemandeform.component';
import { NavbarutilisateurComponent } from './components/navbarutilisateur/navbarutilisateur.component';
import { InterfaceadminComponent } from './components/interfaceadmin/interfaceadmin.component';
import { ListedemandedemandeurComponent } from './components/listedemandedemandeur/listedemandedemandeur.component';
import { ListedemanderesponsableComponent } from './components/listedemanderesponsable/listedemanderesponsable.component';
import { NavbardemandeurComponent } from './navbardemandeur/navbardemandeur.component';
import { NavbarresponsableComponent } from './navbarresponsable/navbarresponsable.component';
import { DashboarddemandeurComponent } from './components/dashboarddemandeur/dashboarddemandeur.component';
import { DashboardresponsableComponent } from './components/dashboardresponsable/dashboardresponsable.component';
import { ListemotifsComponent } from './components/listemotifs/listemotifs.component';

@NgModule({
  declarations: [
    AppComponent,
    ListedemandesComponent,
    ListeutilisateursComponent,
    ListerolesComponent,
    ListerolesutilisateurComponent,
    ListemarquesComponent,
    ListeproduitsComponent,
    InterfaceloginComponent,
    AjouteruserformComponent,
    AjouterdemandeformComponent,
    NavbarutilisateurComponent,
    InterfaceadminComponent,
    ListedemandedemandeurComponent,
    ListedemanderesponsableComponent,
    NavbardemandeurComponent,
    NavbarresponsableComponent,
    DashboarddemandeurComponent,
    DashboardresponsableComponent,
    ListemotifsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
