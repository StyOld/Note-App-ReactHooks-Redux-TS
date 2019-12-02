import React, {Component} from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { TagsState, ClassNameTypes } from "../../store/tags/types";
import { addNewTag, deleteTag, choseTag, editTag, onChange, clearForm } from "../../store/tags/actions";
import { TagItem } from './../Tags/TagItem';

interface TagProps {
    addNewTag: typeof addNewTag;
    deleteTag: typeof deleteTag;
    choseTag: typeof choseTag;
    editTag: typeof editTag;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    tags: TagsState;
}

class Tags extends Component<TagProps & ClassNameTypes> {
    render() {
        const {currentTag, tags} = this.props.tags;
        const {addNewTag, editTag, deleteTag, choseTag, onChange, clearForm} = this.props;
        const disabled = currentTag.tagName === '' || currentTag.tagColor === 'empty';

        return (
            <div className='col'>
                {/*<TagForm/>*/}
                {/*<TagList/>*/}
                <form className="form-inline" onSubmit={currentTag.edit ? editTag : addNewTag}>
                    <select
                        className="custom-select mt-2"
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
                    <input
                        className="form-control mt-2"
                        placeholder="Name of Tag"
                        id="tagName"
                        name="tagName"
                        value={currentTag.tagName}
                        onChange={onChange}
                    />
                    <button type="submit" className="btn btn-primary mt-2" disabled={disabled}>{currentTag.edit ? 'Save changes' : 'Add new Tags'}</button>
                    <button type="button" className="btn btn-danger mt-2" onClick={clearForm}>Clear</button>
                </form>
                {tags.map((tag, keyId) => <TagItem tag={tag} key={keyId} onDelete={deleteTag} onChose={choseTag}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    // notes: state.notes,
    tags: state.tags
});

const mapDispatchProps = {addNewTag, deleteTag, choseTag, editTag, onChange, clearForm};

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Tags);


