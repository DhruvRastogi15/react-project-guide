import React from 'react'
import Button from 'react-bootstrap/Button';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''
        }
    };

    componentDidMount() {

    }

    Back = () => {
        this.props.history.push({
            pathname: "/"
        })
    }

    Login = () => {
        this.props.history.push({
            pathname: "/HomePage"
        })
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <form style={{}}>
                    User Name: <input type='text' value={this.state.userName} onChange={this.onChange} id="userName" placeholder='Enter your UserName' style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                    Password:  <input type='password' value={this.state.password} onChange={this.onChange} id="password" placeholder='Enter Password' style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                    <input type='submit' onClick={this.Login} style={{ marginTop: 5, marginBottom: 5 }}></input>
                </form>
                <Button onClick={this.Back}>
                    Home
                </Button>
            </div>
        )
    }

}

export default Login;