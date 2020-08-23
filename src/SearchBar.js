import React from 'react';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput(){
        this.inputRef.current.focus()
    }

    render(){
        let x = {margin:'20px'}
        return(
            <div style={x}>
                <input type="text" ref={this.inputRef}/>
                
            </div>
        );
    }
}

export default SearchBar;