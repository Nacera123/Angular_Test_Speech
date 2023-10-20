import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input() tuyauData: any
  @Output() emetteur: EventEmitter<string> = new EventEmitter<string>()

  ngOnInit(): void {
    console.log(this.tuyauData);

  }

  transmettre(donneeAEnvoyer: string) {
    this.emetteur.emit(donneeAEnvoyer)
  }
}
