import React from 'react';

class Item extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        return(
            <div>
                <img src={this.props.source}></img>
                <br></br>
                <p>{this.props.price}</p>
                <button onClick={this.props.add}>Add to cart</button>
            </div>
        );
    }
}

export default Item;