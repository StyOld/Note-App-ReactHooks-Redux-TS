import React, { FunctionComponent } from 'react';
import { Tag } from "./models/tag";

interface Props {
    tag: Tag;
    onDelete: (tag: Tag) => void;
}

export const TagItem: FunctionComponent<Props> = ({ tag, onDelete }) => {
    return (
        <button type="button" className={`btn btn-${tag.tagColor}`}>
            {tag.tagName}   <span onClick={() => onDelete(tag)}>x</span>
        </button>
    )
};