import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-note-form-editor',
  templateUrl: './note-form-editor.component.html',
  styleUrls: ['./note-form-editor.component.css']
})
export class NoteFormEditorComponent implements OnInit {
  @Output() event = new EventEmitter<string>();

  noteForm = new FormGroup({
    noteContent: new FormControl(""),
  });

  constructor() { }

  ngOnInit(): void {}

  onSubmit(): void {
    this.event.emit(this.noteForm.value);
  }

}
