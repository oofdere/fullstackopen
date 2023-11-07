# part0
## 0.4 - New Note POST diagram
This diagram shows the process of creating a new note using a traditional architecture.

```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: POST /new
  activate server
  Note left of server: the server stores the new note
  server-->>browser: 302 FOUND /notes
  deactivate server

  Note right of browser: the browser completely reloads the page
  browser->>server: GET /notes
  activate server
  server-->>browser: text/html
  deactivate server

  browser->>server: GET /main.css
  activate server
  server-->>browser: text/css
  deactivate server

  browser->>server: GET /main.js
  activate server
  server-->>browser: application/javascript
  deactivate server

  activate browser
  Note right of browser: clientside JS fetches notes from server
  
  browser->>server: GET /data.json
  activate server
  server-->>browser: application/json

  deactivate server
  deactivate browser
```

## 0.5 - SPA loading diagram
This diagram shows how the SPA app loads.

```mermaid
sequenceDiagram
  participant browser
  participant server

  browser->>server: GET /spa
  activate server
  Note left of server: the server sends a minimal payload to load `spa.js`
  server-->>browser: text/html
  deactivate server

  activate browser
  Note right of browser: spa.js is executed to hydrate (fill in) the page<br>by creating the DOM elements needed to render the page
  browser->>server: GET /data.json
  activate server
  server-->>browser: application/json
  deactivate server
  Note right of browser: spa.js parses the JSON and renders it to the DOM
  deactivate browser
  
```

## 0.6 - New Note SPA diagram
This diagram shows how notes are created on the SPA version of the notes app.

```mermaid
sequenceDiagram
  participant browser
  participant server

  Note right of browser: user submits the form,<br>which is intercepted by the onSubmit ccallback
  Note right of browser: we optimistically append the new note to the DOM<br>and create a JSON payload to POST to /new
  browser->>server: POST /new
  activate server
  Note left of server: the server stores the new note
  Note left of server: sends a status message<br>e.g. {message: "note created"}
  server-->>browser: 201 CREATED
  deactivate server

  Note right of browser: the browser does nothing since the UI was optimistically<br>updated (unless the server sends an error message)
```
