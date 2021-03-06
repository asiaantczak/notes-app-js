(function() {
  function testStoresArrayOfNotes() {
    var noteList = new NoteList();
    assert.isEqual(noteList.notes.length, 0, 'storesAnEmptyArray');
    noteList.notes.push(new Note('note 1'));
    noteList.notes.push(new Note('note 2'));
    assert.isEqual(noteList.notes.length, 2, 'storesArrayOfNotes');
  }
  testStoresArrayOfNotes();
})(this);

(function() {
  function testReturnAllTheNotesStored() {
    var noteList = new NoteList();
    var note1 = new Note('note 1');
    var note2 = new Note('note 2');
    noteList.notes.push(note1);
    noteList.notes.push(note2);
    assert.arraysAreEqual(
      noteList.getNotes(),
      [note1, note2],
      'testReturnAllTheNotesStored'
    );
  }
  testReturnAllTheNotesStored();
})(this);

(function() {
  function testCreateAndStoreNewNote() {
    var noteList = new NoteList();
    var text = 'Favorite drink: seltzer';
    noteList.createNote(text);
    assert.isEqual(
      noteList.notes.pop().text,
      text,
      'testCreateAndStoreNewNote'
    );
  }
  testCreateAndStoreNewNote();
})(this);
