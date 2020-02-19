import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HeaderService {

    constructor(private http: HttpClient) {}

    getCharacters() {
        const url = "http://localhost:8080/measures/characters/json";
        return this.http.get(url);
    }

    getNotes(characterId){
        const notesURL = new URL('http://localhost:8080/measures/characters/note/json');
        notesURL.searchParams.set("typeId", "G00001");
        notesURL.searchParams.set("characterId", characterId);
        console.log(notesURL.toString());
        return this.http.get(notesURL.toString());
    }

}