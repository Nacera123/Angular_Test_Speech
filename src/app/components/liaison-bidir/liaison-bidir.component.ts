import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaison-bidir',
  templateUrl: './liaison-bidir.component.html',
  styleUrls: ['./liaison-bidir.component.css']
})
export class LiaisonBidirComponent {
  public texte!: string
  ngOnInit(): void {
    //initialisation du texte
    this.texte = ''

    //la liaison bidirectionnelle necessite d'une part l'import
    //de formsModule dans le tableau 'imports' de 
    //app.module.ts
    //et l'utilisation de [(ngModel)]= texte dans l'input
    //concerné par la liaison
  }
}
