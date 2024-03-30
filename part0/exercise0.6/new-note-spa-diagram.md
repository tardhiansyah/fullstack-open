sequenceDiagram
    note right of Browser: User add new notes and clicked save button, The redrawNotes and sendToServer function called
    Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    note right of Browser: The redrawNotes function update the notes container data to show the new notes.
