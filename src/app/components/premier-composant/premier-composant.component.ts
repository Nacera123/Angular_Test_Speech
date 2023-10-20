import { Component, OnInit } from '@angular/core';
import simpleDecorator from 'src/app/decorators/simple-decorator.decorator';


@simpleDecorator({
  valeur1: '100',
  valeur2: '400',
})
@Component({
  selector: 'app-premier-composant',
  templateUrl: './premier-composant.component.html',
  styleUrls: ['./premier-composant.component.css']
})
export class PremierComposantComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);

  }
}
