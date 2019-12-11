console.log("API Routes loaded")
const router = require("express").Router()
var fs = require("fs");


router.post("/notes", function(req, res) {
    console.log("POST", req.body)
    

   let dataDB = JSON.parse(fs.readFileSync('./db/db.json'))
    console.log(dataDB)
    const newNotes = req.body
    console.log(newNotes)
    dataDB.push(newNotes)
    console.log(dataDB)
    fs.writeFile('./db/db.json', JSON.stringify(dataDB), function(err) {
    
      if (err) {
        return console.log(err);
      }
      res.json(dataDB);
    })
    
});

router.get("/notes", function(req, res) {
    // get the nores form the file db.json

    console.log("GET")
   res.json(JSON.parse(fs.readFileSync('./db/db.json')))
      
  });

router.delete('/notes/:id', function (req, res) {
    //read the file that you want to delete
    let dataDB = JSON.parse(fs.readFileSync('./db/db.json'))
    const requestId = req.params.id;
    let title = dataDB.filter(title => {
        return title.title = requestId;
    })
    const index = dataDB.indexOf(title);
    //figure how to delete the file
    dataDB.splice(index, 1);


    fs.writeFile('./db/db.json', JSON.stringify(dataDB), function(err) {
    
        if (err) {
          return console.log(err);
        }
        res.json(dataDB);
      })
      

  })
//   const dataDB =  fs.readFile('../db.json', "utf8", function(error, data) {

//     if (error) {
//       return console.log(error);
//     }



module.exports=router;