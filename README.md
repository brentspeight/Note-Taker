# Note-Taker
This application is used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.


The application uses frontend to connect to the backend.


The following HTML routes are created index.html and notes.html


GET /notes - Should return the notes.html file.


GET * - Should return the index.html file




The application has a db.json file on the backend that will be used to store and retrieve notes using the fs module.


The following API routes is created:


GET /api/notes - Which reads the db.json file and return all saved notes as JSON.


POST /api/notes - Which recieve a new note to save on the request body, added to the db.json file, and then return the new note to the client.


DELETE /api/notes/:id - Which recieve a query paramter containing the id of a note to delete. 



User Story