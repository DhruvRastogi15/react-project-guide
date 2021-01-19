import React from 'react'

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            abc: '',
            date: new Date()
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

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

}
export default LoginPage;