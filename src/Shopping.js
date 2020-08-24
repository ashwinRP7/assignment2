import React, { createRef } from 'react';
import './Shopping.css';
import cartimg from './cart.png'
import item1 from './001.jpg'
import item2 from './002.jpg'
import item3 from './003.jpg'
import item4 from './004.jpg'
import Item from './Item';
import CartList from './CartList'
import SearchBar from './SearchBar';

class Shopping extends React.Component{
    constructor(props){
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state={
            cartItem:[],
            
        }
        this.parentRef = React.createRef()
    }

    handleRefClick =() =>{
        this.parentRef.current.focusInput()
    }

    addToCart(newItem){
        this.setState({
            cartItem:[...this.state.cartItem,newItem]
        })
        
    }

    removeFromCart(ind){
        this.setState({
            cartItem:[...this.state.cartItem].filter((item)=> item.id!=ind.i)
        });
        console.log(ind);
    }

       
    render(){
        //console.log(this.state.cartItem.length);
        console.log(this.state.cartItem)
        
        let rightCol;
        if(this.state.cartItem.length == 0){
            rightCol = <img src={cartimg} ></img>;
        }
        else{
            
            rightCol = <CartList obj={{array:this.state.cartItem , removeFromCart:this.removeFromCart.bind(this)} } />;
        }

        let btnstyle = {margin:'20px'}
        return(
            <React.Fragment>
                <SearchBar ref={this.parentRef} ></SearchBar>
                <button style={btnstyle}onClick={this.handleRefClick}>Search</button>
                
                <div className="row">
                    <div className="col1">
                        
                        <Item source={item1} price="$10" add={()=> this.addToCart({name:"Item1",cost:10,id:1})} />
                        <Item source={item2} price="$20" add={()=> this.addToCart({name:"Item2",cost:20,id:2})}/>
                        <Item source={item3} price="$30" add={()=> this.addToCart({name:"Item3",cost:30,id:3})}/>
                        <Item source={item4} price="$40" add={()=> this.addToCart({name:"Item4",cost:40,id:4})}/>
                        <Item source={item1} price="$10" add={()=> this.addToCart({name:"Item1",cost:10,id:5})}/>
                        <Item source={item2} price="$20" add={()=> this.addToCart({name:"Item2",cost:20,id:6})}/>
                        <Item source={item3} price="$30" add={()=> this.addToCart({name:"Item3",cost:30,id:7})}/>
                        <Item source={item4} price="$40" add={()=> this.addToCart({name:"Item4",cost:40,id:8})}/>
                        
                        
                    </div>
                    <div className="col2">
                        {rightCol}
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default Shopping;