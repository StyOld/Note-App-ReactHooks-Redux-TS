import React, {Component} from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { TagsState } from "../../store/tags/types";
import { addNewTag, deleteTag, choseTag, editTag, onChange, clearForm } from "../../store/tags/actions";
import {TagForm} from "./TagForm";
import {TagList} from "./TagList";

interface TagProps {
    addNewTag: typeof addNewTag;
    deleteTag: typeof deleteTag;
    choseTag: typeof choseTag;
    editTag: typeof editTag;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    tags: TagsState;
}

class Tags extends Component<TagProps> {
    render() {
        const {currentTag, tags} = this.props.tags;
        const {addNewTag, editTag, deleteTag, choseTag, onChange, clearForm} = this.props;

        return (
            <div className='col-4'>
                <TagForm
                    currentTag={currentTag}
                    addNewTag={addNewTag}
                    editTag={editTag}
                    onChange={onChange}
                    clearForm={clearForm}/>
                <TagList
                    tags={tags}
                    choseTag={choseTag}
                    deleteTag={deleteTag}
                />
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    tags: state.tags
});

const mapDispatchProps = {addNewTag, deleteTag, choseTag, editTag, onChange, clearForm};

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Tags);


