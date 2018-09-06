import React, { Component } from 'react';

class AddPlayer extends Component {
    
    state = {
        name: null,
        playstyle: null,
        subs: null,
        key: null,
        img: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addPlayer(this.state);
    }

    render() {
        return (
            <div>
                <h2>Add Player</h2>
                <form onSubmit={this.handleSubmit} >
                    <label htmlFor="name">Name: </label>
                    <input type='text' id='name' onChange={this.handleChange} />
                    <label htmlFor="playstyle">Playstyle: </label>
                    <input type='text' id='playstyle' onChange={this.handleChange} />
                    <label htmlFor="subs">Subscribers: </label>
                    <input type='number' id='subs' onChange={this.handleChange} />
                    <label htmlFor="img">Image Path: </label>
                    <input type='text' id='img' onChange={this.handleChange} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddPlayer;