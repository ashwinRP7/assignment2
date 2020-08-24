import React from 'react';

class CartList extends React.Component{
    constructor(props) {
        super(props);

    }  

    render(){

        let x = {display:"inline",margin:'10px'};
        let y = {backgroundColor:'red'}

        const cartItemList = this.props.obj.array.map((item,index)=>
            <div key={index}>
                <p style={x}>{item.name}</p>
                <button style={y} onClick={()=>this.props.obj.removeFromCart({i:item.id})}>Remove</button>
            </div>
        );
        
        const total = this.props.obj.array.reduce((totalSum,item) => totalSum+item.cost,0);
        
        return(
            <div>
                {cartItemList}
                <p>Cart Total : {total}</p>
            </div>
        );
    }
}

export default CartList;