import React, {Component} from 'react';

class HeaderForm extends Component{
    constructor(props){
        super(props);
    }
    
    handleSubmit(event){
        event.preventDefault();
        if(this.refs.inputTerm.value!=''){
            this.props.addListElement(this.refs.inputTerm.value)
        }
    }
    handleChange(){
        this.props.changeTerm(this.refs.inputTerm.value);
    }

    render(){
        const inputStyle = {
            width:'100%',
            height:'50px',
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            border :'0px',
            fontSize:'15px',
            color:'#fff',
            fontWeight:'400',
            textIndent: '18px',
            padding: '0px 60px 0px 0px',
            background:'rgba(255,255,255,0.2)',
            boxShadow: 'none',
            outline:'none',
            fontFamily: "'Roboto', sans-serif"
        }
        const svg = {

                width:'16px',
                height:'16px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                margin: '-8px 0 0 -8px',
                enableBackground:'new 0 0 16 16"'
            
        }
        
        const button = {
            
                width:'50px',
                height:'50px',
                borderRadius: '25px',
                border:'0px',
                position: 'absolute',
                top:'15px',
                right:'15px',
                outline:'none',
                zIndex:'2',
                background: '#fff',
                boxShadow: 'none',
                cursor:'pointer'
            
        }
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input style={inputStyle}  value={this.props.term} 
                type="text" ref="inputTerm" onChange={this.handleChange.bind(this)}
                placeholderStyle={{color:'#fff',fontWeight:'400'}}
                 placeholder="Enter an activity..." />
                <button style={button}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                    xmlns="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                    viewBox="0 0 16 16" style={svg}  
                    space="preserve"><g><g>
                    <path className="fill" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></g></svg>
                </button>
            </form>
        )
    }
}

export default HeaderForm;