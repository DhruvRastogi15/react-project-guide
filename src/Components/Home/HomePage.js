import React from 'react'
import Button from 'react-bootstrap/Button';

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
            <div>
                <h1>This is Home Page</h1>
{/* <div style={{ marginLeft: 100, marginRight: 100, height: 100, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
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
                    </div> */}
            </div>
        );
    }
}

export default HomePage;