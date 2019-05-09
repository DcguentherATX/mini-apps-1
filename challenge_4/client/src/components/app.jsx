import React from 'react';
import Table from './Table.jsx';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        //bind functions here
    }
    // define functions here
    let row = [];
makeRows() {
    for (var i = 0; i < 6; i++) {
        row.push(<div><Row row={i} /></div>)
    }
};

render() {
    return (
        <div className="app">
            <h1>Connect Four</h1>
            <label>Player One: </label>
            <input type="text" name="playerOneName"></input>
            <label>Player Two: </label>
            <input type="text" name="playerTwoName" style={{ marginBottom: '5px' }}></input>
            <div>
                <Table makeRows={makeRows} />
            </div>
        </div>
    )
}
}

export default App; 