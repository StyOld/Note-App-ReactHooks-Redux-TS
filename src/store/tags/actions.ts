import {Tag, OnChangeEvents, ADD_NEW_TAG, DELETE_TAG, CHOSE_TAG, EDIT_TAG, ON_CHANGE_TAG, CLEAR_TAG_FORM, TagsActionTypes,
    FormEvents} from "./types";

export function addNewTag(event: FormEvents) : TagsActionTypes {
    event.preventDefault();
    return {
        type: ADD_NEW_TAG
    }
}

export function deleteTag(tagToDelete: Tag) : TagsActionTypes {
    return {
        type: DELETE_TAG,
        payload: tagToDelete
    }
}

export function choseTag(chosenTag: Tag) : TagsActionTypes {
    return {
        type: CHOSE_TAG,
        payload: chosenTag
    }
}

export function editTag(event: FormEvents) : TagsActionTypes {
    event.preventDefault();
    return {
        type: EDIT_TAG
    }
}

export function onChangeTag(event: OnChangeEvents) : TagsActionTypes {
    return {
        type: ON_CHANGE_TAG,
        payload: {
            name: event.target.name,
            value: event.target.value
        }
    }
}

export function clearForm() : TagsActionTypes {
    return {
        type: CLEAR_TAG_FORM
    }
}