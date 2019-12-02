import React from 'react';
import Notes from './Notes/Notes'
import Tags from './Tags/Tags'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Notes/>
                    <Tags/>
                </div>
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