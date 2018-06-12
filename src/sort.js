import React, { Component } from 'react';

class Sort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <button onClick={this.props.sort}>{this.props.name}</button>
        )
    }
}

export default Sort;