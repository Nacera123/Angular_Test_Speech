import { Component, OnInit, Output } from '@angular/core';
import { EmployeService } from 'src/app/services/employe-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public data!: any
  public donneeClique!: string
  constructor(private readonly service: EmployeService) { }

  ngOnInit(): void {
    this.data = {
      nom: "Dubois",
      prenom: "toto",
      fonction: "Manager"
    }
  }

  receptionEvenement(ev: string) {
    console.log(ev);
    this.donneeClique = ev

  }
}
