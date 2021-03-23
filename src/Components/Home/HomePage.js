import React from 'react'
import Header from "../CommonComponents/Header";

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{ background: 'linear-gradient(to left,rgba(350,100,10,5),transparent)', height: 100, marginTop: 0,justifyContent:'flex-start' }}>
                <h1>Dhruv</h1>
            </div>


        );
    }
}

export default HomePage;