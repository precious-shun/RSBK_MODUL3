import React, { Component } from "react";
class Child extends Component {
    state = { angka: 0 }

    componentDidMount() {
        alert(`1 die added. Do a check!`)
    }

    rollDie = () => {
        var RandomNumber = Math.floor(Math.random() * 20) + 1 ;
        this.setState((state) => { return { angka: RandomNumber } })
    }

    componentWillUnmount() {
        alert('1 die removed')
    }

    render() {
        return (
            <div>
                <p>Roll A Die</p>
                <button onClick={this.rollDie}>Roll d20!</button>
                <br />
                <span>{this.state.angka}</span>
            </div>
        );
    }
}
export default Child;