import { TagsState, ADD_NEW_TAG, DELETE_TAG, CHOSE_TAG, EDIT_TAG, ON_CHANGE, CLEAR_TAG_FORM, TagsActionTypes} from "./types";

const initialState: TagsState = {
    currentTag: {
        id: Date.now(),
        tagName: '',
        tagColor: 'empty',
        edit: false,
    },
    tags: [],
};

export function tagsReducer(state = initialState, action: TagsActionTypes): TagsState {
    switch (action.type) {
        case ADD_NEW_TAG:
            return {
                ...state,
                currentTag: {
                    id: Date.now(),
                    tagName: '',
                    tagColor: 'empty',
                    edit: false,
                },
                tags: [...state.tags, state.currentTag]
            };

        case DELETE_TAG:
            return {
                ...state,
                tags: [
                    ...state.tags.filter(tags => tags.id !== action.payload.id)
                ]
            };

        case CHOSE_TAG:
            return {
                ...state,
                currentTag: {
                    ...action.payload,
                    edit: true,
                }
            };

        case EDIT_TAG:
            return {
                ...state,
                tags: [
                    ...state.tags.map(tags => tags.id === state.currentTag.id ? {...state.currentTag} : tags)
                ],
            };

        case ON_CHANGE:
            return {
                ...state,
                currentTag: {
                    ...state.currentTag,
                    [action.payload.name]: action.payload.value
                }
            };

        case CLEAR_TAG_FORM:
            return {
                ...state,
                currentTag: {
                    id: Date.now(),
                    tagName: '',
                    tagColor: 'empty',
                    edit: false,
                }
            };

        default:
            return state;
    }
}