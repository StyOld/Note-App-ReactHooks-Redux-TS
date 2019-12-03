import {Note, OnChangeEvents, ADD_NEW_NOTE, ADD_TAG_TO_NOTE, DELETE_NOTE, CHOSE_NOTE, EDIT_NOTE, ON_CHANGE, CLEAR_NOTE_FORM, NotesActionTypes,
    FormEvents} from "./types";

export function addNewNote(event: FormEvents) : NotesActionTypes {
    event.preventDefault();
    return {
        type: ADD_NEW_NOTE
    }
}

export function addTagToNote(event: OnChangeEvents) : NotesActionTypes {
    return {
        type: ADD_TAG_TO_NOTE,
        payload: {
            name: event.target.name,
            value: JSON.parse(event.target.value)
        }
    }
}

export function deleteNote(noteToDelete: Note) : NotesActionTypes {
    return {
        type: DELETE_NOTE,
        payload: noteToDelete
    }
}

export function choseNote(chosenNote: Note) : NotesActionTypes {
    return {
        type: CHOSE_NOTE,
        payload: chosenNote
    }
}

export function editNote(event: FormEvents) : NotesActionTypes {
    event.preventDefault();
    return {
        type: EDIT_NOTE
    }
}

export function onChange(event: OnChangeEvents) : NotesActionTypes {
    return {
        type: ON_CHANGE,
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    }
}

export function clearForm() : NotesActionTypes {
    return {
        type: CLEAR_NOTE_FORM
    }
}