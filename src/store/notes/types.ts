import {FormEvent, ChangeEvent} from 'react';

export const ADD_NEW_NOTE = 'ADD_NEW_NOTE';
export const ADD_TAG_TO_NOTE = 'ADD_TAG_TO_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const CHOSE_NOTE = 'CHOSE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ON_CHANGE_NOTE = 'ON_CHANGE_NOTE';
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

export interface onChangeOptionPayload {
    name: string,
    value: Tag
}

export type OnChangeEvents = ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
export type FormEvents = FormEvent<HTMLFormElement>;

export type ClassNameTypes = {
    className?: string;
    style?: string
};

interface AddNewNoteAction {
    type: typeof ADD_NEW_NOTE;
}

interface AddTagToNoteAction {
    type: typeof ADD_TAG_TO_NOTE;
    payload: onChangeOptionPayload;
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
    type: typeof ON_CHANGE_NOTE;
    payload: onChangePayload;
}

interface ClearFormAction {
    type: typeof CLEAR_NOTE_FORM;
}

export type NotesActionTypes =  AddNewNoteAction | AddTagToNoteAction | DeleteNoteAction | ChoseNoteAction | EditNoteAction | OnChangeAction | ClearFormAction;