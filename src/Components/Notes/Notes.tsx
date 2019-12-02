import React, {Component} from 'react';
import { connect } from "react-redux";
import { AppState } from "../../store";
import { NotesState } from "../../store/notes/types";
import { addNewNote, deleteNote, choseNote, editNote, onChange, clearForm } from "../../store/notes/actions";
import {NoteForm} from "./NoteForm";
// import {NoteList} from "./NoteList";

interface NoteProps {
    addNewNote: typeof addNewNote;
    deleteNote: typeof deleteNote;
    choseNote: typeof choseNote;
    editNote: typeof editNote;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    notes: NotesState;
}

class Tags extends Component<NoteProps> {
    render() {
        const {currentNote, notes} = this.props.notes;
        const {addNewNote, editNote, deleteNote, choseNote, onChange, clearForm} = this.props;

        return (
            <div className='col-8'>
                <NoteForm
                    currentNote={currentNote}
                    addNewNote={addNewNote}
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
    notes: state.notes
});

const mapDispatchProps = {addNewNote, deleteNote, choseNote, editNote, onChange, clearForm};

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Tags);