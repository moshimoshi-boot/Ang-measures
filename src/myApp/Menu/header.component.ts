import { Component, ViewChild, OnInit, ContentChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { NoteService } from '../Service/note.service'

@Component({
    selector: 'header-root',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css', '../myApp.component.css']
})

export class HeaderComponent implements OnInit {
    
    public characters;

    constructor(
      private noteService: NoteService,
    ){}

    @ViewChild("appMenu") trigger: MatMenuTrigger;
    @ViewChild("matMenu") menu: MatMenu;
    @Output() event = new EventEmitter<string>();
  
    /** 
    * 初期表示
    */
    ngOnInit(): void {
      this.getCharactersMenu();
    }

    private getCharactersMenu(): void {
      this.noteService.getCharacters()
      .subscribe(characters => this.characters = characters);
    }

    clickMenu() {
      this.trigger.openMenu();
    }

    /** 
    * メニュー選択時 親コンポーネントにキャラクターIDを渡す
    */
    onSelect(character) {
      this.event.emit(character.id);
    }
}