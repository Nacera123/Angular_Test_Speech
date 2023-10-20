export default function simpleDecorator(arg: any) {
    console.log(arg)

    return function (target: any) {
        console.log("Hello depuis l'intérieur du simpleDecorator")
        console.log("type de la cible", typeof target)
        console.log("cible: ", target)

        Object.defineProperty(target.prototype, 'valeurAjouteeParSD1', {
            value: arg.valeur1,
            writable: false
        })

        Object.defineProperty(target.prototype, 'valeurAjouteeParSD2', {
            value: arg.valeur2,
            writable: false
        })
    }
}
