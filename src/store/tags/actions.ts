import { Tag, UpdateTagsParam, ADD_NEW_TAG, DELETE_TAG, CHOSE_TAG, EDIT_TAG, ON_CHANGE, CLEAR_TAG_FORM } from "./types";
import React from "react";

export function addNewTag() {
    return {
        type: ADD_NEW_TAG
    }
}

export function deleteTag(tagToDelete: Tag) {
    return {
        type: DELETE_TAG,
        payload: tagToDelete
    }
}

export function choseTag(chosenTag: Tag) {
    return {
        type: CHOSE_TAG,
        payload: chosenTag
    }
}

export function editTag() {
    return {
        type: EDIT_TAG
    }
}

export function onChange(event: UpdateTagsParam) {
    return {
        type: ON_CHANGE,
        payload: {
            name: event.currentTarget.name,
            value: event.currentTarget.value
        }
    }
}

export function clearForm() {
    return {
        type: CLEAR_TAG_FORM
    }
}