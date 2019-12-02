import React from "react";
import {choseTag, deleteTag} from "../../store/tags/actions";
import {Tag} from "../../store/tags/types";
import {TagItem} from "./TagItem";

interface TagListProps {
    tags: Tag[];
    choseTag: typeof choseTag;
    deleteTag: typeof deleteTag;
}

export const TagList = React.memo<TagListProps>(props => {
    const {tags, choseTag, deleteTag} = props;

    return (
        <div className='m-3'>
            {tags.map((tag, keyId) => (
                <TagItem
                    key={keyId}
                    tag={tag}
                    onChose={choseTag}
                    onDelete={deleteTag}
                />
            ))}
        </div>
    )
});