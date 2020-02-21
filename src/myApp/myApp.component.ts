import { Component } from '@angular/core';

@Component({
  selector: 'myApp-root',
  templateUrl: './myApp.component.html',
  styleUrls: ['./myApp.component.css']
})
export class MyAppComponent {
  title = 'Ang-measures';
  public selectedCharacterId;

  /** 
   * headerの子コンポーネントからキャラクターIDを受け取る
  */
  onReceiveEventFromChild(characterId) {
    this.selectedCharacterId = characterId;
  }
}
