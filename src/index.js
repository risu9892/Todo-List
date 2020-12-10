import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = { tasks: [ ] };

  handleSubmit = task => {
    this.setState({tasks: [...this.state.tasks, task]});
  }

  render() { 
    return ( 
      <div>
        <Header numTodos={this.state.tasks.length}/>
        <TodoList tasks={this.state.tasks}/>
        <SubmitForm onFormSubmit={this.handleSubmit} />
      </div>
     );
  }
}
 
const Header = (props) => {
  return (
    <h1>
      You have {props.numTodos} Todos
    </h1>
  )
} 

const TodoList = (props) => {
  const todos = props.tasks.map((todo, index ) => {
    return (
      <Todo content={todo} key={index} id={index} />
    )
  })
  return (
    <div>
      {todos}
    </div>
  )
}

const Todo = (props) => {
  return (
    <div>
      {props.content}
    </div>
  )
}

class SubmitForm extends React.Component {
  state = { term: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.task === '') return;
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: '' });
  }

  render() { 
    return ( 
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Enter Item'
          value={this.state.term}
          onChange= {(e) => this.setState({term: e.target.value})}
        />
        <button>Submit</button>
      </form>
    );
  }
}
 ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


