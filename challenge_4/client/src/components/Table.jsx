import React from 'react';
import Row from './Row.jsx';

const Table = (props) => {
    console.log(props);
    return (
        <div className="table">
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
            <Row />
        </div>
    )


}

export default Table;