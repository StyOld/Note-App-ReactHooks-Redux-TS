import React from "react";
import {NoteForm} from "../Notes/NoteForm";
// import {NoteList} from "../Notes/NoteList";

class Notes extends React.Component {
    render() {
        return (
            <div className='col-8'>
                <NoteForm
                    // currentTag={currentTag}
                    // addNewTag={addNewTag}
                    // editTag={editTag}
                    // onChange={onChange}
                    // clearForm={clearForm}
                />
                {/*<NoteList*/}
                {/*    notes={notes}*/}
                {/*    choseNote={choseTag}*/}
                {/*    deleteTag={deleteTag}*/}
                {/*/>*/}
            </div>
        )
    }
}
export default Notes;