import React from 'react'
import { Button } from 'react-bootstrap'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname:'',
            // dob : ''
            uname : '',
            password : ''
        }
    }

    componentDidMount() {

    }

    Back = () => {
        this.props.history.push({
            pathname: "/"
        })
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }

    onClick = () => {
        alert(this.state.password)
    }

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                First Name <input type='text' placeholder='Enter First Name' id='fname' value={this.state.fname} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                Last Name <input type='text' placeholder='Enter Last Name' id='lname' value={this.state.lname} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                DOB <input type='Date' placeholder='Enter Date of Birth' id='date' value={this.state.dob} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                User Name <input type='text' placeholder='Enter User Name' id='uname' value={this.state.uname} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                Password <input type='password' placeholder='Enter Name' id='password' value={this.state.password} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                <input type='Submit' onClick={this.onClick}></input><br />

                <Button onClick={this.Back}>
                    Home
                </Button>
            </div>
        )
    }
}

export default SignUp;