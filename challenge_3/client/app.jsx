class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            addressLineOne: '',
            addressLineTwo: '',
            city: '',
            state: '',
            zip: '',
            credit: '',
            expiration: '',
            cvv: '',
            billingZip: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //bind functions here
    }
    // other functions here
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick() {

    }

    render() {
        return (
            <div>
                <h1>Grocery Cart App</h1>
                <button onClick={this.handleClick}>Checkout</button>
                <FormOne handleChange={this.handleChange} />
                <FormTwo handleChange={this.handleChange} />
                <FormThree handleChange={this.handleChange} />
            </div>
        );
    }
};

const FormOne = function (props) {
    console.log(props);
    return (
        <form id="formOne">
            <label>
                Full Name:
            <input type="text" name="name" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Email:
                <input type="text" name="email" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Password:
                <input type="text" name="password" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <button>Next</button>
        </form>
    );
}

const FormTwo = function (props) {
    return (
        <form id="formTwo">
            <label>
                Address Line 1:
                <input type="text" name="addressLineOne" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Address Line 2:
                <input type="text" name="addressLineTwo" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                City:
                <input type="text" name="city" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                State:
                <input type="text" name="state" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Zip:
                <input type="text" name="zip" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Phone Number:
                <input type="text" name="phone" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <button>Next</button>
        </form>
    )
}

const FormThree = function (props) {
    return (
        <form id="formThree">
            <label>
                Credit Card Number:
                <input type="text" name="credit" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Expiration Date:
                <input type="text" name="expiration" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                CVV:
                <input type="text" name="cvv" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <label>
                Billing Zip:
                <input type="text" name="billingZip" onChange={(e) => props.handleChange(e)}></input>
            </label>
            <button>Next</button>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));




