/**ancienne syntaxe */

// export class EmplyeModel {

//     public nom!: string
//     public prenom!: string
//     public fonction!: string


//     constructor(nom: string, prenom: string, fonction: string) {

//         this.nom = nom
//         this.prenom = nom
//         this.fonction = nom
//     }
// }
export class EmplyeModel {

    constructor(
        public nom: string,
        public prenom: string,
        public fonction: string
    ) { }
}