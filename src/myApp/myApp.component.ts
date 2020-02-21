import { Component } from '@angular/core';

@Component({
  selector: 'myApp-root',
  templateUrl: './myApp.component.html',
  styleUrls: ['./myApp.component.css']
})
export class MyAppComponent {
  title = 'Ang-measures';
  public selectedCharacterId;
  public newNoteObject;

  /** 
   * headerの子コンポーネントからキャラクターIDを受け取る
  */
  onReceiveCharacterId(characterId) {
    this.selectedCharacterId = characterId;
  }

  onReceiveNewNote(note){
    this.newNoteObject = note;
  }
}
