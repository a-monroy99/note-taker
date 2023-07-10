const fs =require("fs");
const path = require("path");
let notesFromFile = require("../db/db.json");
const { v4 : uuidv4 } =require('uuid');


module.exports = (app) =>{
// GET method to retrieve all your notes
  app.get("/api/notes", (req,res) => {
    res.json(notesFromFile)
  });
        
// POST method to post notes to your database/db.json
  app.post("/api/notes", (req,res) =>{
    let someNote = req.body;
    someNote.id = uuidv4();
    console.log(someNote)

    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) {
        console.log(err)
      } else {
        notesFromFile = JSON.parse(data);
        notesFromFile.push(someNote);
        fs.writeFile("./db/db.json", JSON.stringify(notesFromFile, null, 2), (err) => {
          err ? console.log(err) : console.log("Notes saved to file!");
          res.sendFile((path.join(__dirname, '../public/notes.html')));
        });
        
      }
    })
  })


    // *extra credit* DELETE to remove a note from database/db.json



}