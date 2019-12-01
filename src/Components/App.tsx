import React, {Component} from 'react';
import { connect } from "react-redux";
import { AppState } from "../store";
import { TagsState } from "../store/tags/types";
import { addNewTag, deleteTag, choseTag, editTag, onChange, clearForm } from "../store/tags/actions";
import { TagItem } from './TagItem';

interface AppProps {
    addNewTag: typeof addNewTag;
    deleteTag: typeof deleteTag;
    choseTag: typeof choseTag;
    editTag: typeof editTag;
    onChange: typeof onChange;
    clearForm: typeof clearForm;
    // notes: NotesState;
    tags: TagsState;
}

class App extends Component<AppProps> {
  render() {
    const {currentTag, tags} = this.props.tags;
    const {addNewTag, editTag, deleteTag, choseTag, onChange, clearForm} = this.props;
    const disabled = currentTag.tagName === '' || currentTag.tagColor === 'empty';

    return (
        <div className='container'>
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
)(App);


// type User = {
//     name: string;
//     age: number;
//     placeOfWork: Array<{
//         [index: number]: string;
//     }>;
//     isAdmin? : boolean;
//     isDeleted? : boolean;
// }
//
// let testUser: User = {name: 'aaa', age: 2, placeOfWork: ['2', '3'], isAdmin: true};
// let testUsers: Array<User> = [{name: '2', age: 3, placeOfWork: ['2','3']}, {name: '2', age: 3, placeOfWork: ['22'], isAdmin: true},
//     {name: 'Azazaz', age: 32, placeOfWork: ['a', 'b'], isAdmin: false}];
//
// const ArrayFilter = (array: Array<User>) => { return array.filter((item): item is User => item.isAdmin === false) };
// console.log(ArrayFilter(testUsers));
//
// const ArrayFilterForName = (array: Array<User>, name: string) => { return array.filter(item => item.name === name) };
// console.log(ArrayFilterForName(testUsers, '2'));

// interface Note {
//     id: number,
//     plaintext: string,
//     creationTime: number,
//     tags: Tag[],
// }

// interface State {
//     newNote: Note,
//     notes: Note[],
//     currentTag: Tag,
//     tags: Tag[]
// }

// state = {
//     newNote: {
//         id: 1,
//         plaintext: '',
//         creationTime: 0,
//         tags: [],
//     },
//     notes: [],
// };