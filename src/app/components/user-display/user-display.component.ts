import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model.model';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  public userList!: UserModel[]
  public loaded: boolean = false
  public requestStarted: boolean = false

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.userList = []
  }

  makeUserList() {
    this.loaded = false
    this.requestStarted = true
    this.userService.getUsersAll().subscribe({
      next: (res: any) => {
        console.log(res);
        this.requestStarted = false
        // this.loaded = true
        res.map(user => {
          let userM: UserModel = new UserModel(
            user.id,
            user.name,
            user.email,
            user.address.city
          )
          this.userList.push(userM)
        })
        this.displayUser()
      }
    })
  }

  displayUser() {
    this.loaded = true
  }
}
