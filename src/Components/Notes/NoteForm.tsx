import React from "react";
import {editNote, addNewNote, onChange, clearForm} from "../../store/notes/actions";
import {Note} from "../../store/notes/types";

interface NoteFormProps {
    currentNote: Note;
    editNote: typeof editNote;
    addNewNote: typeof addNewNote;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
}

export const NoteForm: React.FunctionComponent<NoteFormProps> = props => {
    const {currentNote, editNote, addNewNote, onChange, clearForm} = props;
    // const disabled = currentTag.tagName === '' || currentTag.tagColor === 'empty';

    return (
        <form className="form-inline col" onSubmit={currentNote.edit ? editNote : addNewNote}>
            <textarea
                className="form-control m-1"
                placeholder="Added plaintext"
                id="noteName"
                name="noteName"
                value={currentNote.plaintext}
                onChange={onChange}
            />
            <select
                className="custom-select m-1"
                id="tagColor"
                name="tagColor"
                // value={currentNote.tagColor}
                onChange={onChange}
            >
                {/* TODO : make it in map with const=[options]*/}
                <option defaultValue="empty">Choose tags</option>
                <option value="primary">Blue</option>
                <option value="secondary">Grey</option>
                <option value="success">Green</option>
                <option value="danger">Red</option>
                <option value="dark">Black</option>
                <option value="light">White</option>
            </select>
            <div className='row m-1'>
                <button type="submit" className="btn btn-primary m-1">{currentNote.edit ? 'Save changes' : 'Add new Note'}</button>
                <button type="button" className="btn btn-danger m-1" onClick={clearForm}>Clear</button>
            </div>
        </form>
    )
};