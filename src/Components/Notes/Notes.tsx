import React from "react";

type ClassNameTypes = {
    className?: string;
};

class Notes extends React.Component<ClassNameTypes, {}> {
    render() {
        return (
            <div className='col'>
                TODO
            </div>
        )
    }
}
export default Notes;