import { Component, OnInit } from '@angular/core';
import { EmplyeModel } from 'src/app/models/employe-model.model';
import { EmployeService } from 'src/app/services/employe-service.service';

@Component({
  selector: 'app-liste-employes',
  templateUrl: './liste-employes.component.html',
  styleUrls: ['./liste-employes.component.css']
})
export class ListeEmployesComponent implements OnInit {

  public listemployes!: EmplyeModel[]
  public uneDate: Date = new Date()

  constructor(

    private employeService: EmployeService
  ) { }

  ngOnInit(): void {
    this.listemployes = this.employeService.getEmployeListe()
    console.log("liste employe depuis l'afficheur", this.listemployes);

  }

}
