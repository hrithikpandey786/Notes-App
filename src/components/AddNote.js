import React from "react"

export default function AddNote(props){
    const [noteText, setNoteText] = React.useState('');
    const characterLimit = 200;

    function handleChange(event){
        // console.log(event.target.value);
        if(characterLimit-event.target.value.length>=0)
        setNoteText(event.target.value);
    }

    function handleSaveClick(){
        if(noteText.trim().length>0){
            props.handleAddNote(noteText);
            setNoteText('');
        }
    }
    
    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                value={noteText}
                placeholder="Add New Note"
                onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit-noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}