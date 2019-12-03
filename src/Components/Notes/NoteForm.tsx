import React from "react";
import {editNote, addNewNote, addTagToNote, onChange, clearForm} from "../../store/notes/actions";
import {Tag} from "../../store/tags/types";
import {Note} from "../../store/notes/types";

interface NoteFormProps {
    currentNote: Note;
    editNote: typeof editNote;
    addNewNote: typeof addNewNote;
    addTagToNote: typeof addTagToNote;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    tags: Tag[]
}

export const NoteForm: React.FunctionComponent<NoteFormProps> = props => {
    const {currentNote, tags, editNote, addNewNote, addTagToNote, onChange, clearForm} = props;
    // const disabled = currentTag.tagName === '' || currentTag.tagColor === 'empty';

    return (
        <form className="form-inline col" onSubmit={currentNote.edit ? editNote : addNewNote}>
            <textarea
                className="form-control m-1"
                placeholder="Added plaintext"
                id="plaintext"
                name="plaintext"
                value={currentNote.plaintext}
                onChange={onChange}
            />
            <select
                className="custom-select m-1"
                onChange={addTagToNote}
            >
                {tags.map((tagItem, keyId) => (
                    <option
                        key={keyId}
                        value={JSON.stringify(tagItem)}
                    >
                        {tagItem.tagName}
                    </option>
                ))}
            </select>
            <div className='border border-primary'>
                {currentNote.tags.map((tagItem, keyId) => (
                    <button
                        key={keyId}
                        type="button"
                        className={`btn btn-${tagItem.tagColor} m-1`}
                        onClick={()=>{console.log('TODO')}}>
                        {tagItem.tagName}
                    </button>
                ))}
            </div>
            <div className='row m-1'>
                <button type="submit" className="btn btn-primary m-1">{currentNote.edit ? 'Save changes' : 'Add new Note'}</button>
                <button type="button" className="btn btn-danger m-1" onClick={clearForm}>Clear</button>
            </div>
        </form>
    )
};