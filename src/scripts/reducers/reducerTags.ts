const initialState = {
    newNote: {
        id: 1,
        plaintext: '',
        creationTime: 0,
        tags: [],
    },
    notes: [],

    currentTag: {
        id: Date.now(),
        tagName: '',
        tagColor: 'empty',
        edit: false,
    },
    tags: [],
};

const reducerTags = (state = initialState, action: object) => {
    switch (action) {
        case 't':
            return {
                ...state,
            };

        default:
            return state;
    }
};

export default reducerTags;