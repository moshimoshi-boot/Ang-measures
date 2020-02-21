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
  @Input() newNoteObjectChild;

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
    this.selectedCharacterIdChild = "00001";
    this.noteService.getNotes(this.selectedCharacterIdChild)
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

  @Input('newNoteObjectChild')
  set updateNote(externalVal) {
    this.newNoteObjectChild = externalVal;
    const newNote = {
      noteId: "",
      noteContent: externalVal.noteContent,
      gameTypeId: "G00001",
      characterId: this.selectedCharacterIdChild
    };
    this.notes.push(newNote);
    this.changeDetectorRef.detectChanges();
  }

}