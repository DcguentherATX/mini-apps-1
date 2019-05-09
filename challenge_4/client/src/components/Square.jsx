import React from 'react';

const Square = (props) => {
    const squareStyle = {
        display: 'inline-block',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '90px',
        width: '90px',
        marginRight: '1px',
        borderRadius: '50%',
        margin: '5px'
    }

    return (
        <div className="box" style={squareStyle}></div >
    )

}

export default Square;