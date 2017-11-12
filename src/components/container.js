import React,{Component} from 'react';
import Complete from './complete';
import Todo from './todo';


class Container extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
       
        const container = {
            width: '100%',
            float: 'left',
            padding: '15px'
        }
        return(
            <div style={container}>
                <Todo removeListElement={this.props.removeListElement} updateListElement={this.props.updateListElement} todo={this.props.todo}/>
                <Complete removeListElement={this.props.removeListElement} updateListElement={this.props.updateListElement} completed={this.props.completed}/>
            </div>
        )
    }
}

export default Container;