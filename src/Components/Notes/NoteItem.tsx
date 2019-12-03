import React from 'react';
import {choseNote, deleteNote} from "../../store/notes/actions";
import {ClassNameTypes} from "../../store/notes/types";
import {Note} from "../../store/notes/types";

interface NoteItemProps {
    note: Note;
    choseNote: typeof choseNote;
    deleteNote: typeof deleteNote;
}

export const NoteItem = React.memo<NoteItemProps>(props => {
    const { note, choseNote, deleteNote } = props;

    return (
        <div className="card">
            <div
                className="card-body">
                <h5 className="card-title">{`${new Date(note.creationTime).getDate()}.${new Date(note.creationTime).getMonth()}.${new Date(note.creationTime).getFullYear()}`}</h5>
                <p className="card-text">{note.plaintext}</p>
                {note.tags.map((tagItem, keyId) => (
                    <span
                        key={keyId}
                        className={`badge badge-${tagItem.tagColor} m-1`}>
                        {tagItem.tagName}
                    </span>
                ))}
            </div>
        </div>
    )
});