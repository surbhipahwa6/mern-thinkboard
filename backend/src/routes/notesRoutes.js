import express from "express"
import { createNote, deleteNote, getAllNotes, getNoteById, updateNotes } from "../controllers/notesController.js";

const router = express.Router();

router.get("/",getAllNotes)

router.get("/:id",getNoteById)

router.post("/",createNote)

router.put("/:id",updateNotes)

router.delete("/:id",deleteNote)


export default router;

