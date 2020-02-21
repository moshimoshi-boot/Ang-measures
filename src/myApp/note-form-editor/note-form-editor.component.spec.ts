import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormEditorComponent } from './note-form-editor.component';

describe('NoteFormEditorComponent', () => {
  let component: NoteFormEditorComponent;
  let fixture: ComponentFixture<NoteFormEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteFormEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteFormEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
