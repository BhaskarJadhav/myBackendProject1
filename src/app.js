// to create the Server 
const express = require('express')

 const app = express()

 //comes undefiend if we dont add th this format .. this allows the expres to read the data in json format from frontend 
 app.use(express.json())


const notes=[]

    // "/notes" is the name of the API 
    // "post"  name of method  is post ---> send the data to the-server...............

app.post('/notes',(req, res)=>{

    notes.push(req.body)
    res.status(201).json({
        message: "note craeted sucessfully"
    })    
});

app.get('/notes',(req , res)=>{

    res.status(200).json({
    message: "note fetched sucessfully",
    notes:notes   })
})

// delete 
app.delete('/notes/:index',(req , res) =>{

    const index = req.params.index;

    delete notes[index]

    res.status(200).json({

        message:"note deleted Sucessfully "
    })

});


// Update 

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index;
    const description = req.body.description

    notes[index].description =description

    res.status(200).json({
        message :"note updated sucessfully " 
    })
})



// for exporting the app to server 
 module.exports = app
