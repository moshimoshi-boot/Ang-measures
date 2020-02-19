import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HeaderService {

    constructor(private http: HttpClient) {}

    getCharacters() {
        const url = "http://localhost:8080/measures/characters/json";
        return this.http.get(url);
    }

}