import React from "react";
import Note from "./Note"
import AddNote from "./AddNote";

export default function NotesList(props){
    return (
        <div className="notes-list">
            {props.notes.map((note) => {
                return <Note 
                    key={note.id} 
                    id={note.id} 
                    text={note.text} 
                    date={note.date} 
                    handleDeleteNote={(id)=>props.handleDeleteNote(id)}
                />
            })}
            <AddNote handleAddNote={(text)=>props.handleAddNote(text)}/>
        </div>
    )
}