import Note from "../models/Note.js"

export const getAllNotes= async (req,res)=>{
     try {
        const notes= await Note.find().sort({createdAt:-1}) //newest first 
        return res.status(200).json(notes)
    } catch (error) {
        console.log("getAllNotes controller failed",error)
        return res.status(500).json({message:"Internal server error"})
    }
}

export const getNoteById= async (req,res)=>{
     try {
        const note= await Note.findById(req.params.id) 
        if(!note){
          res.status(404).json({message:"Note not found"})   
        }
        res.status(200).json(note)
    } catch (error) {
        console.log("getAllNotes controller failed",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export const createNote=  async (req,res)=>{
   
      try {
        const {title,content}= req.body
        const newNote= new Note({title,content})
        const savedNote= await newNote.save()
        res.status(201).json(savedNote)
    } catch (error) {
        console.log("createNote controller failed",error)
        res.status(500).json({message:"Internal server error"})
    }  
}

export const updateNotes= async (req,res)=>{
   try {
        const {title,content}= req.body
        const updatedNote=  await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
        if(!updatedNote){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json(updatedNote)
    } catch (error) {
        console.log("updateNotes controller failed",error)
        res.status(500).json({message:"Internal server error"})
    }  
    
}

export const deleteNote= async (req,res)=>{
       try {
        const deletedNote= await Note.findByIdAndDelete(req.params.id)
        if(!deletedNote){
            res.status(404).json({message:"Note not found"})
        }
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
        console.log("deleteNote controller failed",error)
        res.status(500).json({message:"Internal server error"})
    }  
    
}