class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: '',
            email: '',
            password: '',
            addressLineOne: '',
            addressLineTwo: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            credit: '',
            expiration: '',
            cvv: '',
            billingZip: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.next = this.next.bind(this);
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

    next() {
        if (this.state.count === 3) {
            Axios.post(){
                console.log('post request');
            }

            this.setState({
                count: 0,
                name: '',
                email: '',
                password: '',
                addressLineOne: '',
                addressLineTwo: '',
                city: '',
                state: '',
                zip: '',
                phone: '',
                credit: '',
                expiration: '',
                cvv: '',
                billingZip: ''
            })
        } else {
            let next = this.state.count + 1;
            this.setState({
                count: next
            });
        }
    }

    render() {
        if (this.state.count === 0) {
            return (
                <div>
                    <h1>Grocery Cart App</h1>
                    <button onClick={this.next}>Checkout</button>
                </div>
            )
        } else if (this.state.count === 1) {
            return (
                <div>
                    <h1>Grocery Cart App</h1>
                    <FormOne handleChange={this.handleChange} next={this.next} />
                </div>
            );
        } else if (this.state.count === 2) {
            return (
                <div>
                    <h1>Grocery Cart App</h1>
                    <FormTwo handleChange={this.handleChange} next={this.next} />
                </div>
            );
        } else if (this.state.count === 3) {
            return (
                <div>
                    <h1>Grocery Cart App</h1>
                    <FormThree handleChange={this.handleChange} next={this.next} />
                </div>
            );
        }
    }
};

const FormOne = function (props) {
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
            <button onClick={props.next}>Next</button>
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
            <button onClick={props.next}>Next</button>
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
            <button onClick={props.next}>Purchase</button>
        </form>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));




