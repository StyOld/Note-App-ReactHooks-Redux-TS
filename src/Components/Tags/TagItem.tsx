import React from 'react';
import {choseTag, deleteTag} from "../../store/tags/actions";
import {Tag} from "../../store/tags/types";

interface TagItemProps {
    tag: Tag;
    onChose: typeof choseTag;
    onDelete: typeof deleteTag;
    // onDelete: (tag: Tag) => void;
    // onChose: (tag: Tag) => void;
}

export const TagItem = React.memo<TagItemProps>(props => {
    const { tag, onDelete, onChose } = props;

    return (
        <button
            key={tag.id}
            type="button"
            className={`btn btn-${tag.tagColor} btn-sm m-1`}>
            <div onClick={() => onChose(tag)}>{tag.tagName}</div>
            <span className='badge badge-light ml-3' onClick={() => onDelete(tag)}>x</span>
        </button>
    )
});