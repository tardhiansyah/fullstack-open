sequenceDiagram
note right of Browser: User add new notes and clicked save button
Browser->>+Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
Server-->>-Browser: HTTP Status Code 302. Redirect to https://studies.cs.helsinki.fi/exampleapp/notes
note right of Browser: The browser load the notes page
