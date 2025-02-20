const express = require('express');
const router = express.Router();
const Notes = require("../models/Notes")
const { body, validationResult } = require('express-validator');
const Fetchuser = require("../middleware/Fetchuser");

//const Notes=require("../models/Notes")
//Route 1: get all the notes using: get "/api/notes/fetchallnotes"
router.get('/fetchallnotes', Fetchuser, async (req, res) => {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes)


})



//Route 2: add a new notes using : post "/api/notes/addnote" login required

router.post('/addnote', Fetchuser, [
    body('title', 'enter the valid title').isLength({ min: 4 }),
    body('description', 'enter the description with have minimum 10 character').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { title, description, tag, } = req.body;
        //if there are errors,return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savednote = await note.save();
        res.json(savednote)
    }
    catch (error) {
        res.status(401).send({ error: "internal problem in the program" });
    }

})

//Route 3: updating the existing notes using : post "/api/notes/updatenote" login required

router.put('/updatenote/:id', Fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;
    const newNote = {}
    if (title) {
        newNote.title = title;
    }
    if (description) {
        newNote.description = description;
    }
    if (tag) {
        newNote.tag = tag;
    }
    //finding the note to be updated and update
    const note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("not found");
    }
    if (note.user.toString() !== req.user.id) {
        return res.status(401).send("not allow to update");
    }
    const notes = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    //find the notes to be updated

    //const note=Notes.findByIdAndUpdate()
    res.send(notes);




})


//Route 4   delete the existing notes using : delete "/api/notes/deletenote" login required

router.delete('/deletenote/:id', Fetchuser, async (req, res) => {

    //find the note to be deleted and delete it
    try {
        
    
    const note = await Notes.findById(req.params.id);
    if (!note) {
        return res.status(404).send("not found");
    }
    //allow the user to delete the note if he own that note
    if (note.user.toString() !== req.user.id) {
        return res.status(404).send("not allow to update");
    }

    const notes = await Notes.findByIdAndDelete(req.params.id);
    //find the notes to be updated

    //const note=Notes.findByIdAndUpdate()
    res.json({"sucess":"note is deleted"});
} catch (error) {
    res.status(401).send({ error: "internal problem in the program" });    
}



})



module.exports = router