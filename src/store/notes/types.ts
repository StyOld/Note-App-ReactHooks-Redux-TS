import {FormEvent, ChangeEvent} from 'react';

export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CHOSE_NOTE = 'CHOSE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ON_CHANGE = 'ON_CHANGE';
export const CLEAR_NOTE_FORM = 'CLEAR_NOTE_FORM';

export interface Tag {
    id: number,
    tagName: string,
    tagColor: string,
    edit?: boolean,
}

export interface Note {
    id: number,
    plaintext: string,
    creationTime: number,
    tags: Tag[],
    edit?: boolean,
}

export interface NotesState {
    currentNote: Note,
    notes: Note[]
}

export interface onChangePayload {
    name: string,
    value: string
}

export type OnChangeEvents = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export type FormEvents = FormEvent<HTMLFormElement>;

export type ClassNameTypes = {
    className?: string;
};

interface AddNewNoteAction {
    type: typeof ADD_NEW_NOTE;
}

interface DeleteNoteAction {
    type: typeof DELETE_NOTE;
    payload: Note;
}

interface ChoseNoteAction {
    type: typeof CHOSE_NOTE;
    payload: Note;
}

interface EditNoteAction {
    type: typeof EDIT_NOTE;
}

interface OnChangeAction {
    type: typeof ON_CHANGE;
    payload: onChangePayload;
}

interface ClearFormAction {
    type: typeof CLEAR_NOTE_FORM;
}

export type NotesActionTypes =  AddNewNoteAction | DeleteNoteAction | ChoseNoteAction | EditNoteAction | OnChangeAction | ClearFormAction;