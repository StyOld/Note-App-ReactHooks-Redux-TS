import React from "react";
import {choseNote, deleteNote} from "../../store/notes/actions";
import {Note} from "../../store/notes/types";
import {NoteItem} from "./NoteItem";

interface NoteListProps {
    notes: Note[];
    choseNote: typeof choseNote;
    deleteNote: typeof deleteNote;
}

export const NoteList = React.memo<NoteListProps>(props => {
    const {notes, choseNote, deleteNote} = props;

    return (
        <div className='m-3'>
            {notes.map((note, keyId) => (
                <NoteItem
                    key={keyId}
                    note={note}
                    choseNote={choseNote}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    )
});