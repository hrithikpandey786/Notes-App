import React from "react"
import NotesList from "./components/NotesList"
import {nanoid} from "nanoid"
import "./index.css"
import Search from "./components/Search.js"
import Header from "./components/Header.js"

export default function App(){
  const [notes, setNotes] = React.useState(JSON.parse(localStorage.getItem("react-notes-app-data")) || []);

React.useEffect(()=>{
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const [searchText, setSearchText] = React.useState('');
  const [darkMode, setDarkMode] = React.useState(false);

  function handleSearchText(text){
    setSearchText(text);
  }

  function handleToggleDarkMode(){
    setDarkMode(prevDarkMode=>{return !prevDarkMode});
  }

  function deleteNote(id){
    const newNotes = notes.filter((note)=>{return note.id !== id});
    setNotes(newNotes);
  }

  function handleAddNote(text){
    const date = new Date();
    const addNote = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      text: text
    }
    const newNotes = [...notes, addNote];
    setNotes(newNotes);
  }
  
  return (
    <div className={(darkMode)?"dark-mode":""}>
        <div className="container">
        <Header handleToggleDarkMode={handleToggleDarkMode}/>
        <Search text={searchText} handleSearchText={handleSearchText}/>
        <NotesList notes={notes.filter((note)=>{return note.text.toLowerCase().includes(searchText)})} handleAddNote={handleAddNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
}
