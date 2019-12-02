import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppState} from "../../store";
import {NotesState} from "../../store/notes/types";
import {TagsState} from '../../store/tags/types';
import { addNewNote, addTagToNote, deleteNote, choseNote, editNote, onChange, clearForm } from "../../store/notes/actions";
import {NoteForm} from "./NoteForm";
// import {NoteList} from "./NoteList";

interface NoteProps {
    addNewNote: typeof addNewNote;
    addTagToNote: typeof addTagToNote;
    deleteNote: typeof deleteNote;
    choseNote: typeof choseNote;
    editNote: typeof editNote;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    notes: NotesState;
    tags: TagsState
}

class Tags extends Component<NoteProps> {
    render() {
        const {currentNote, notes} = this.props.notes;
        const {tags} = this.props.tags;
        const {addNewNote, addTagToNote, editNote, deleteNote, choseNote, onChange, clearForm} = this.props;

        return (
            <div className='col-8'>
                <NoteForm
                    currentNote={currentNote}
                    tags={tags}
                    addNewNote={addNewNote}
                    addTagToNote={addTagToNote}
                    editNote={editNote}
                    onChange={onChange}
                    clearForm={clearForm}/>
                {/*<NoteList*/}
                {/*    notes={notes}*/}
                {/*    choseNote={choseNote}*/}
                {/*    deleteNote={deleteNote}/>*/}
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    notes: state.notes,
    tags: state.tags
});

const mapDispatchProps = {addNewNote, addTagToNote, deleteNote, choseNote, editNote, onChange, clearForm};

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Tags);