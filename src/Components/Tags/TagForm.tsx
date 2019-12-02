import React from "react";
import {editTag, addNewTag, onChange, clearForm} from "../../store/tags/actions";
import {Tag} from "../../store/tags/types";

interface TagFormProps {
    currentTag: Tag;
    editTag: typeof editTag;
    addNewTag: typeof addNewTag;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
}

export const TagForm: React.FunctionComponent<TagFormProps> = props => {
    const {currentTag, editTag, addNewTag, onChange, clearForm} = props;
    const disabled = currentTag.tagName === '' || currentTag.tagColor === 'empty';

    return (
        <form className="form-inline col" onSubmit={currentTag.edit ? editTag : addNewTag}>
            <input
                className="form-control m-1"
                placeholder="Name of Tag"
                id="tagName"
                name="tagName"
                value={currentTag.tagName}
                onChange={onChange}
            />
            <select
                className="custom-select m-1"
                id="tagColor"
                name="tagColor"
                value={currentTag.tagColor}
                onChange={onChange}
            >
                <option defaultValue="empty">Choose color</option>
                <option value="primary">Blue</option>
                <option value="secondary">Grey</option>
                <option value="success">Green</option>
                <option value="danger">Red</option>
                <option value="dark">Black</option>
                <option value="light">White</option>
            </select>
            <div className='row m-1'>
                <button type="submit" className="btn btn-primary m-1" disabled={disabled}>{currentTag.edit ? 'Save changes' : 'Add new Tags'}</button>
                <button type="button" className="btn btn-danger m-1" onClick={clearForm}>Clear</button>
            </div>
        </form>
    )
};