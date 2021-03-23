import React from 'react'
import Button from 'react-bootstrap/Button';


class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            abc: '',
            date: new Date(),
            counter: 0,
            name: '',
            name2: '',
            topVisible: true,
            bottomVisible: false

        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    onPress = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onPressReset = () => {
        this.setState({
            counter: 0
        })
    }

    onSubmit = () => {
        if (this.state.name === '' || this.state.name.length < 5) {
            alert("Please enter your name")
        } else {
            this.setState({
                topVisible: false,
                bottomVisible: true,
                name2: this.state.name
            })
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    
    StartOver = () => {
        this.setState({
            topVisible: true,
            bottomVisible: false,
            name: '',
            name2: '',
            counter: 0
        })
    }

    onClickLogin = () => {
        this.props.history.push({
            pathname: "/Login",
        });

    }

    onClickSignUp = () => {
        this.props.history.push({
            pathname: "/SignUp"
        })
    }
    onClickFoodMenu = () => {
        this.props.history.push({
            pathname: "/OddEven"
        })
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: 20 }}>
                    <Button
                        onClick={this.onClickLogin}>
                        Login
                            </Button>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button
                        onClick={this.onClickSignUp}>
                        Sign Up</Button>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Button
                        onClick={this.onClickFoodMenu}>
                        Odd Even</Button>
                </div>
                {this.state.topVisible ?
                    <h1>Enter Your Name</h1>
                    :
                    null
                }
                {this.state.topVisible ?
                    <form>
                        <input
                            type='text'
                            value={this.state.name}
                            onChange={this.onChange}
                            id="name"
                        ></input><br />
                        <Button
                            onClick={this.onSubmit}
                            style={{ height: 40, width: 100, marginTop: 20, color: 'black', borderRadius: 10 }}
                        >
                            Submit
                        </Button>

                    </form>
                    :
                    null
                }
                {this.state.bottomVisible ?
                    <h1>Hello {this.state.name2}</h1>
                    :
                    null
                }
                {this.state.bottomVisible ?
                    <h2>It's {this.state.date.toLocaleTimeString()}.</h2>
                    :
                    null
                }
                {this.state.bottomVisible ?
                    <h3>You have pressed this button {this.state.counter} times</h3>
                    :
                    null
                }
                {this.state.bottomVisible ?
                    <div style={{ marginLeft: 100, marginRight: 100, height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <div style={{}}>
                            <div style={{}}>
                                <Button
                                    onClick={this.onPress}
                                    style={{ height: 40, width: 100, marginRight: 40, marginTop: 10, color: 'green', borderRadius: 10 }}
                                >
                                    Press Me!!
                        </Button>
                                <Button
                                    onClick={this.onPressReset}
                                    style={{ height: 40, width: 100, color: 'red', borderRadius: 10 }}>
                                    Reset
                        </Button>

                            </div>
                        </div>
                        <Button
                            onClick={this.StartOver}
                            style={{ height: 40, width: 100, color: 'red', borderRadius: 10, marginTop: 20 }}>
                            Start Over.
                        </Button>
                    </div>
                    :
                    null
                }
            </div>
        );
    }

}
export default LoginPage;