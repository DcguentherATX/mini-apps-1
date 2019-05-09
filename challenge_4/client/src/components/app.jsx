import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        //bind functions here
    }
    // define functions here

    render() {
        return (
            <div>
                <h1>Connect Four</h1>
                <label>Player One: </label>
                <input type="text" name="playerOneName"></input>
                <label>Player Two: </label>
                <input type="text" name="playerTwoName"></input>
            </div>
            <div>
                <Square x={0} y={0} />
                <Square x={1} y={0} />
                <Square x={2} y={0} />
            </div>
        )
    }
}

export default App; 