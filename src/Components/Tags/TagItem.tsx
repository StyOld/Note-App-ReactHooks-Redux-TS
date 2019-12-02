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
        <button type="button" className={`btn btn-${tag.tagColor}`} key={tag.id}>
            <div onClick={() => onChose(tag)}>{tag.tagName}</div>
            <span onClick={() => onDelete(tag)}>x</span>
        </button>
    )
});