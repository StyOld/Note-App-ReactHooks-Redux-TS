import React, { FunctionComponent } from 'react';
import { Tag } from "../models/tag";

interface Props {
    tag: Tag;
    onDelete: (tag: Tag) => void;
    onChose: (tag: Tag) => void;
}

export const TagItem: FunctionComponent<Props> = props => {
    const { tag, onDelete, onChose } = props;

    return (
        <button type="button" className={`btn btn-${tag.tagColor}`} key={tag.id}>
            <div onClick={() => onChose(tag)}>{tag.tagName}</div>
            <span onClick={() => onDelete(tag)}>x</span>
        </button>
    )
};