import React from 'react';
import Square from './Square.jsx';


const Row = (props) => {
    const tableStyle = {
        backgroundColor: 'blue',
        height: '100px',
        width: '700px',
    }
    return (
        <div className="row" style={tableStyle}>
            Yo!
        </div>
    )

}

export default Row;