import React, {ChangeEvent, Component} from 'react';
import { TagItem } from './TagItem';
import { Tag } from "../models/tag";

interface Note {
    id: number,
    plaintext: string,
    creationTime: number,
    tags: Tag[],
}

interface State {
    newNote: Note,
    notes: Note[],
    currentTag: Tag,
    tags: Tag[]
}

class App extends Component<{}, State> {
    state = {
        newNote: {
            id: 1,
            plaintext: '',
            creationTime: 0,
            tags: [],
        },
        notes: [],

        currentTag: {
            id: 1,
            tagName: '',
            tagColor: '',
            edit: false,
        },
        tags: [],
    };

    addNewTag = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.setState(prevState => ({
            currentTag: {
                id: prevState.currentTag.id + 1,
                tagName: "",
                tagColor: "",
            },
            tags: [...prevState.tags, prevState.currentTag]
        }));
    };

    deleteTag = (tagToDelete: Tag) => {
        this.setState(prevState => ({
            tags: [
                ...prevState.tags.filter(tags => tags.id !== tagToDelete.id)
            ]
        }));
    };

    choseTag = (chosenTag: Tag) => {
        this.setState(prevState => ({
            currentTag: {
                ...chosenTag,
                edit: true,
            }
        }))
    };

    editTag = (tagToEdit: Tag) => {
        this.setState(prevState => ({
            tags: [
                ...prevState.tags.map(tags => tags.id === tagToEdit.id ? {...tagToEdit} : tags)
            ]
        }))
    };

    onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        this.setState({
            currentTag: {
                ...this.state.currentTag,
                [event.target.name]: event.target.value
            }
        });
    };

  render() {
    const {currentTag, tags} = this.state;

    return (
        <div className='container'>
            <form className="form-inline" onSubmit={currentTag.edit ? this.editTag : this.addNewTag}>
                <select
                    className="custom-select mt-2"
                    id="tagColor"
                    name="tagColor"
                    value={currentTag.tagColor}
                    onChange={this.onChange}
                >
                    <option selected>Choose color</option>
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
                    onChange={this.onChange}
                />
                <button type="submit" className="btn btn-primary mt-2">{currentTag.edit ? 'Save changes' : 'Add new Tags'}</button>
                <button type="button" className="btn btn-danger mt-2" onClick={()=>alert('TO DO')}>Cancel</button>
            </form>
            {tags.map(tag => <TagItem tag={tag} onDelete={this.deleteTag} onChose={this.choseTag}/>)}
        </div>
    )
  }
}

export default App;


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