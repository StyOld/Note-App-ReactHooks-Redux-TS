import { NotesState, ADD_NEW_NOTE, ADD_TAG_TO_NOTE, DELETE_NOTE, CHOSE_NOTE, EDIT_NOTE, ON_CHANGE_NOTE, CLEAR_NOTE_FORM, NotesActionTypes} from "./types";

const initialState: NotesState = {
    currentNote: {
        id: Date.now(),
        plaintext: '',
        creationTime: Date.now(),
        tags: [],
        edit: false,
    },
    notes: [],
};

export function notesReducer(state = initialState, action: NotesActionTypes): NotesState {
    switch (action.type) {
        case ADD_NEW_NOTE:
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    id: Date.now(),
                    plaintext: '',
                    creationTime: Date.now(),
                    tags: [],
                    edit: false,
                },
                notes: [...state.notes, state.currentNote]
            };

        case ADD_TAG_TO_NOTE:
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    tags: [...state.currentNote.tags, action.payload.value],
                }
            };

        case DELETE_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.filter(notes => notes.id !== action.payload.id)
                ]
            };

        case CHOSE_NOTE:
            return {
                ...state,
                currentNote: {
                    ...action.payload,
                    edit: true,
                }
            };

        case EDIT_NOTE:
            return {
                ...state,
                notes: [
                    ...state.notes.map(notes => notes.id === state.currentNote.id ? {...state.currentNote} : notes)
                ],
            };

        case ON_CHANGE_NOTE:
            return {
                ...state,
                currentNote: {
                    ...state.currentNote,
                    [action.payload.name]: action.payload.value
                }
            };

        case CLEAR_NOTE_FORM:
            return {
                ...state,
                currentNote: {
                    id: Date.now(),
                    plaintext: '',
                    creationTime: Date.now(),
                    tags: [],
                    edit: false,
                }
            };

        default:
            return state;
    }
}