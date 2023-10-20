import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public requestUrlParam!: any
  //recuperer les elements de la chaine de requete
  public queryParams!: any

  constructor(
    private requestedUrl: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.requestUrlParam = this.requestedUrl.params.subscribe(
      params => {
        console.log(params)
        this.queryParams = params
      }
    )
    //celle-ci ne fonctionne pas 
    // this.queryParams = this.requestedUrl.queryParams.subscribe(
    //   params => console.log(params)
    // )

  }
}
