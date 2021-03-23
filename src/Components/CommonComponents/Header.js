import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div style={{ background: 'linear-gradient(to left,rgba(350,100,10,5),transparent)' }}>
                <h1>Dhruv</h1>
            </div>
        )
    }


}