import React, { Component } from 'react';

class Sort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div >
              {this.props.button}
            </div>
        )
    }
}

export default Sort;