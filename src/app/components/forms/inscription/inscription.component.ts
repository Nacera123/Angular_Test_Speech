import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passCompareValidator } from 'src/app/directives/pass-compare.validator.directives';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public langues: string[] = [
    "Francais",
    "English"
  ]

  public monFormulaire!: FormGroup
  public email!: FormControl
  public password!: FormControl
  public confirmPassword!: FormControl
  public language!: FormControl


  ngOnInit(): void {
    //c'est la qu'on mets toutes nos methodes annexes
    this.createFormControl()
    this.createFormModel()
    // this.language.setValue('choose')
  }

  createFormControl() {
    this.email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")])
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)])
    this.confirmPassword = new FormControl('', [Validators.required, Validators.minLength(8), passCompareValidator])
    this.language = new FormControl('', [Validators.required])
    console.log(this.language);

  }

  createFormModel() {
    this.monFormulaire = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
      language: this.language
    })
  }
  envoiSignUpForm() {
    if (this.monFormulaire.valid) {


      this.monFormulaire.reset()
      this.language.setValue('')
    } else {
      alert('Erreurs dans le formulaire')
    }
  }


}
