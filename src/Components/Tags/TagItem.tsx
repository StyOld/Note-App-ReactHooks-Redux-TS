import React from 'react';
import {choseTag, deleteTag} from "../../store/tags/actions";
import { Tag } from "../../store/tags/types";

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
        <button type="button" className={`btn btn-${tag.tagColor} m-1`} key={tag.id}>
            <div className='' onClick={() => onChose(tag)}>{tag.tagName}</div>
            <span className='badge badge-light' onClick={() => onDelete(tag)}>x</span>
        </button>
    )
});