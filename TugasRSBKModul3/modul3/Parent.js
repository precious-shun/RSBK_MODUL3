import { Component } from "react";
import React from "react";
import Child from "./Child";
class Parent extends Component {

    state = {
        dieOne: false,
        dieTwo: false,
        dieThree: false,
        dieFour: false
    }

    addOneDie = () => {
        this.setState((state) => {
            return { dieOne: !this.state.dieOne }
        })
    }

    addTwoDie = () => {
        this.setState((state) => {
            return { dieTwo: !this.state.dieTwo }
        })
    }

    addThreeDie = () => {
        this.setState((state) => {
            return { dieThree: !this.state.dieThree }
        })
    }

    addFourDie = () => {
        this.setState((state) => {
            return { dieFour: !this.state.dieFour }
        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.state.dieOne ? <Child /> : ''}
                    <button onClick={this.addOneDie}>{this.state.dieOne ?
                        'Remove' : 'Add'} a die!</button>
                </div>
                <div>
                    {this.state.dieTwo ? <Child /> : ''}
                    <button onClick={this.addTwoDie}>{this.state.dieTwo ?
                        'Remove' : 'Add'} a die!</button>
                </div>
                <div>
                    {this.state.dieThree ? <Child /> : ''}
                    <button onClick={this.addThreeDie}>{this.state.dieThree ?
                        'Remove' : 'Add'} a die!</button>
                </div>
                <div>
                    {this.state.dieFour ? <Child /> : ''}
                    <button onClick={this.addFourDie}>{this.state.dieFour ?
                        'Remove' : 'Add'} a die!</button>
                </div>                
            </div>
        );
    }
}
export default Parent;