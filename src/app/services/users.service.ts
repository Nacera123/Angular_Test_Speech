import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"



const apiRoot: string = 'https://jsonplaceholder.typicode.com/'
const httpOptions: any = {
    headers: new HttpHeaders({
        'content-type': 'application/json',
        'Accept': 'text/html, application/xhtml+xml, */*'
    }),
    responseType: 'json' as 'json'
}

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    getUsersAll(): Observable<object> {
        return this.http.get(`${apiRoot}users`, httpOptions)
    }

    getUserById(id: number): Observable<object> {
        return this.http.get(`${apiRoot}users/${id}}`, httpOptions)
    }
}