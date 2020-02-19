import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { HeaderService } from '../Service/note.service'

@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', '../myApp.component.css']
})

export class HeaderComponent implements OnInit {
    
    public characters;

    constructor(
      private headerService: HeaderService,
    ){}

    @ViewChild("appMenu") trigger: MatMenuTrigger;
    @ViewChild("matMenu") menu: MatMenu;

    ngOnInit(): void {
      this.getCharactersMenu();
    }

    private getCharactersMenu(): void {
      this.headerService.getCharacters()
      .subscribe(characters => this.characters = characters);
      var data = this.headerService.getCharacters();
      var json = JSON.stringify(data);
      console.log(data);
      console.log(json);
    }

    clickMenu() {
      this.trigger.openMenu();
    }

    onSelect(character) {
      alert(this.headerService.getNotes(character.id));
    }
}