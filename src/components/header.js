import React, {Component} from 'react';
import HeaderForm from './headerForm';


class Header extends Component {
    constructor(props){
        super(props);        
    }

    render(){
        const header = {
                width:"100%",
                height:"80px",
                background: "#25b99a",
                position: "fixed",
                top: "0",
                left: '0',
                borderBottomRightRadius: '10px',
                borderBottomLeftRadius: '10px',
                padding:'15px',
                zIndex: '5',
                boxShadow: '0px 2px 4px rgba(44,62,80,0.15)'
        }
     
        return (
            <header style={header}>
                <HeaderForm changeTerm={this.props.changeTerm} 
                term={this.props.term} 
                addListElement={this.props.addListElement}/>
            </header>
        )
    }
}

export default Header;