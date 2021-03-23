import React from 'react'
import { Button } from 'react-bootstrap'

class OddEven extends React.Component {
    constructor() {
        super()
        this.state = {
            number: null,
            type: ''
        }
    }

    componentDidMount() {

    }
    Item(props) {
        return <li>{props.value}</li>;
    }
    evenOdd = () => {

    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    }
    onClick = () => {
        if (this.state.number % 2 == 0) {
            this.setState({
                type: 'even'
            })
        } else {
            this.setState({
                type: 'odd'
            })
        }
        // this.setState({})
    }
    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <h1>Enter a number</h1>

                <input type='Number' placeholder='Enter a number' id='number' value={this.state.number} onChange={this.onChange} style={{ marginTop: 5, marginBottom: 5 }}></input><br />
                <input type='Submit' onClick={this.onClick}></input><br />
                <text>The number you have entered is {this.state.type}</text>
            </div>
        )
    }
}

export default OddEven;