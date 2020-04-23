import React, { Component } from "react";
class Eventtest extends Component {
    state = { count: 1 }

    onClickCount() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickCount.bind(this)}>Count</button>
                <button>-</button>
                {this.state.count}
            </div>
        )
    }
}
export default Eventtest;