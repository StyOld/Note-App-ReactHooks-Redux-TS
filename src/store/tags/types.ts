export interface Tag {
    id: number,
    tagName: string,
    tagColor: string,
    edit?: boolean,
}

export interface TagsState {
    currentTag: Tag,
    tags: Tag[]
}

// Describing the different ACTION NAMES available
export const ADD_NEW_TAG = 'ADD_NEW_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const CHOSE_TAG = 'CHOSE_TAG';
export const EDIT_TAG = 'EDIT_TAG';
export const ON_CHANGE = 'ON_CHANGE';
export const CLEAR_TAG_FORM = 'CLEAR_TAG_FORM';

interface AddNewTagTagAction {
    type: typeof ADD_NEW_TAG;
}

interface DeleteTagAction {
    type: typeof DELETE_TAG;
    payload: Tag;
}

interface ChoseTagAction {
    type: typeof CHOSE_TAG;
    payload: Tag;
}

interface EditTagAction {
    type: typeof EDIT_TAG;
}

interface OnChangeAction {
    type: typeof ON_CHANGE;
}

interface ClearFormAction {
    type: typeof CLEAR_TAG_FORM;
}

export type TagsActionTypes = AddNewTagTagAction | DeleteTagAction | ChoseTagAction | EditTagAction | OnChangeAction | ClearFormAction;