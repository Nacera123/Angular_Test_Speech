import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { QueryParts } from "../models/query-parts.model"



const apiRoot: string = 'http://api.voicerss.org/?'
const httpOptions: any = {
    headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'text/html, application/xhtml+xml, */*'
    }),
    responseType: 'blob' as 'json'
}

@Injectable({
    providedIn: 'root'
})

export class TtsService {

    public queryParts!: QueryParts

    constructor(
        private http: HttpClient
    ) {
        this.queryParts = new QueryParts(
            'e1932408375f40a1a1b04b3d657a01f7',
            '',
            'fr-fr',
            'Iva',
            '2',
            'mp3',
            '16kHz_16Bit_Stereo'
        )
    }

    createQueryUrl(queryParts: QueryParts): string {
        let queryString = apiRoot + 'key=' + queryParts.key
        queryString += '&hl=' + queryParts.hl
        queryString += '&c=' + queryParts.c
        queryString += '&f=' + queryParts.f
        queryString += '&v=' + queryParts.v
        queryString += '&src=' + encodeURI(queryParts.src)

        return queryString
    }

    getAudioFile(queryParts: QueryParts): Observable<any> {
        let url = this.createQueryUrl(queryParts)
        console.log(url);
        return this.http.get<Blob>(url, httpOptions)

    }
    setSource(src: string): void {
        this.queryParts.src = src
    }
}