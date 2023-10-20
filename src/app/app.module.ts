import { LOCALE_ID, NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/general/home/home.component';
import { NotFoundComponent } from './pages/general/not-found/not-found.component';
import { AboutComponent } from './pages/general/about/about.component';
import { ContactComponent } from './pages/general/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { UcfirstPipe } from './pipes/ucfirst.pipe';
import { LiaisonUnidirComponent } from './components/liaison-unidir/liaison-unidir.component';
import { LiaisonBidirComponent } from './components/liaison-bidir/liaison-bidir.component';
import { PremierComposantComponent } from './components/premier-composant/premier-composant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnfantComponent } from './components/enfant/enfant.component';
import { ParentComponent } from './components/parent/parent.component';
import { ListeEmployesComponent } from './components/liste-employes/liste-employes.component';
import { LiensComponent } from './components/liens/liens.component';
import { SearchComponent } from './pages/specific/search/search.component';
import { InscriptionComponent } from './components/forms/inscription/inscription.component';
import { HttpComponent } from './pages/specific/http/http.component';
import { HttpClientModule } from "@angular/common/http";
import { UserDisplayComponent } from './components/user-display/user-display.component';
import { TtsComponent } from './components/tts/tts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    UcfirstPipe,
    LiaisonUnidirComponent,
    LiaisonBidirComponent,
    PremierComposantComponent,
    EnfantComponent,
    ParentComponent,
    ListeEmployesComponent,
    LiensComponent,
    SearchComponent,
    InscriptionComponent,
    HttpComponent,
    UserDisplayComponent,
    TtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, /**import de formulaire */
    HttpClientModule /**import module http */
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr_FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default)
  }
}
