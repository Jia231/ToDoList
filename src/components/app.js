import React, { Component } from 'react';
import Header from './header';
import Container from './container';
import update from 'react-addons-update';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks:[],
      term:''
  }
    this.addListElement = this.addListElement.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
    this.filterElement = this.filterElement.bind(this);
    this.updateListElement = this.updateListElement.bind(this);
    this.removeListElement = this.removeListElement.bind(this);
  }

  changeTerm(term){
    this.setState({term:term})
  }
  addListElement(task){
    let newTask = {
      id: Date.now(),
      name:task,
      done:false
    }
    //let newState = update(this.state.tasks, {$push: [newTask]})
    this.state.tasks.push(newTask)
    this.setState({tasks:this.state.tasks,term:''});
      //console.log('this is the new state',this.state.tasks)
  }
  filterElement(filter,tasks){
    let filteredTasks = [];
    tasks.map((task)=>{
      if(task.done==filter){
        filteredTasks.push(task);
      }
    })
    //console.log(filter,filteredTasks)
    return filteredTasks;
  }
  updateListElement(taskId){
    let taskList = this.state.tasks;
    let task = taskList.find(x=>x.id==taskId);
    //console.log('this is the task that has been found',task);
    let index = taskList.indexOf(task);
    task.done = task.done==true? false : true;
    taskList.splice(index, 1);
    taskList.push(task);
    this.setState({tasks:taskList})
  }
  removeListElement(taskId){
    let taskList = this.state.tasks;
    let task = taskList.find(x=>x.id==taskId);
    //console.log('this is the task that has been found',task);
    let index = taskList.indexOf(task);
    taskList.splice(index, 1);
    this.setState({tasks:taskList})
  }

  render() {
    return (
      <div>
        <Header term={this.state.term} 
        changeTerm={this.changeTerm.bind(this)} 
        addListElement={this.addListElement.bind(this)}/>
        <Container removeListElement={this.removeListElement.bind(this)} updateListElement={this.updateListElement.bind(this)} 
        todo={this.filterElement(false,this.state.tasks)} 
        completed={this.filterElement(true,this.state.tasks)} />
      </div>
    );
  }
}
