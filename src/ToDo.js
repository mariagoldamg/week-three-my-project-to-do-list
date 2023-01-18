import { Component } from 'react';

export class ToDo extends Component{

state = {
    userInput: '',
    toDoList: []
}


    submitForm (e){
        e.preventDefault();
        console.log ("submitted")
    }

    handleChange  = (e) => {
        this.setState({userInput: e});
    }

addTask (input){
  if (input==='') {alert ("Please type something!")}
  else {
    let listArray = this.state.toDoList;
    listArray.push(input);
    this.setState ({toDoList:listArray, userInput:''})
  }
}

crossedWord(event){
    const li= event.target;
    li.classList.toggle ('crossed');
}

deleteTask(){
    let listArray = this.state.toDoList;
    listArray.length=0;
   
    this.setState({toDoList:listArray})
}

    render() {
        return (<div>
  <form onSubmit = {this.submitForm}>
<div className='container'>

        <input type="text" placeholder='Your to do list'  
        onChange = {(e)=>{this.handleChange (e.target.value)}}
        value={this.state.userInput}/>
</div>

    <div className='container'>
        <button className='btn add' onClick={()=> this.addTask(this.state.userInput)}>Add Task</button>
</div>

<ul>
    {this.state.toDoList.map((item, index) => (
        <li onClick={this.crossedWord} key={index}>
            ✅ {item}</li>
    ))}
</ul>

<div className='container'>
<button className='btn delete' onClick={()=> this.deleteTask()}>Delete</button>
</div>
</form>
</div>
)
    }
}