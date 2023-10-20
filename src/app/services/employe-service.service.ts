import { Injectable } from "@angular/core";
import { EmplyeModel } from "../models/employe-model.model";
import data from '../data/data.js'

@Injectable({
    providedIn: 'root'
})

export class EmployeService {

    private employeListe!: EmplyeModel[]
    private rawData: any

    constructor() {

        this.rawData = data
        console.log(this.rawData);
        this.employeListe = []

        // this.rawData = Array.isArray(data) ? data : [data]
        this.rawData.map(employe => {
            let newEmploye = new EmplyeModel(employe.nom, employe.prenom, employe.fonction)
            this.employeListe.push(newEmploye)
        })
        // on affiche a la console pour débugger
        console.log("liste des employés:", this.employeListe)
        // console.log(this.rawData);
        // console.log(this.employeListe);


    }

    getEmployeListe(): EmplyeModel[] {
        return this.employeListe
    }

    getEmployeByFunction(fonction: string): EmplyeModel[] {
        let temp: EmplyeModel[] = []

        this.employeListe.forEach(employe => {
            if (employe.fonction === fonction) {
                temp.push(employe)
            }
        })
        return temp
    }
}

