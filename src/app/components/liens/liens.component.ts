import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liens',
  templateUrl: './liens.component.html',
  styleUrls: ['./liens.component.css']
})
export class LiensComponent implements OnInit {
  public param1!: number
  public param2!: number


  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
    this.param1 = 12
    this.param2 = 20
  }

  goto(page: number): void {
    this.router.navigate(['search/24'])
  }
  goto1(): void {
    this.router.navigate(['search/' + `${this.param2}`])
  }
}
