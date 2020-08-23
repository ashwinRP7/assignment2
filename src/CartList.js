import React from 'react';

class CartList extends React.Component{
    constructor(props) {
        super(props);

    }

    demoMethod(id){
        switch(id.i){
            case 1:{
                this.props.remove1();
                break;
            }
            case 2:{
                this.props.remove2();
                break;
            }
            case 3:{
                this.props.remove3();
                break;
            }
            case 4:{
                this.props.remove4();
                break;
            }
            case 5:{
                this.props.remove5();
                break;
            }
            case 6:{
                this.props.remove6();
                break;
            }
            case 7:{
                this.props.remove7();
                break;
            }
            case 8:{
                this.props.remove8();
                break;
            }
        }
    }

    DoThis(id){
        let v = id.i;
        //console.log(v);
        this.props.remove({v});
    }

    render(){

        let x = {display:"inline",margin:'10px'};
        let y = {backgroundColor:'red'}

        const cartItemList = this.props.obj.map((item,index)=>
            <div key={index}>
                <p style={x}>{item.name}</p>
                <button style={y} onClick={()=>this.demoMethod({i:item.id})}>Remove</button>
            </div>
        );
        
        const total = this.props.obj.reduce((totalSum,item) => totalSum+item.cost,0);
        
        return(
            <div>
                {cartItemList}
                <p>Cart Total : {total}</p>
            </div>
        );
    }
}

export default CartList;