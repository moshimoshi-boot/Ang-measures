import { Component, OnInit, ChangeDetectorRef, Input  } from '@angular/core';
import { NoteService } from '../Service/note.service'

@Component({
  selector: 'note-root',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public notes;
  @Input() selectedCharacterIdChild;

  constructor(
    private noteService: NoteService,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.getNotesInit();
  }

  /** 
   * 初期表示
  */
  private getNotesInit(): void {
    this.noteService.getNotes("00001")
    .subscribe(notes => this.notes = notes);
  }

  /** 
   * selectedCharacterIdChild が変更された時に呼び出される
  */
  @Input('selectedCharacterIdChild')
  set updateInternalVal(externalVal) {
    this.selectedCharacterIdChild = externalVal;
    this.redrawNotes();
  }

  /** 
   * メモ内容を更新
  */
  redrawNotes(): void {
    this.noteService.getNotes(this.selectedCharacterIdChild)
    .subscribe(notes => this.notes = notes);
    this.changeDetectorRef.detectChanges();
  }

}