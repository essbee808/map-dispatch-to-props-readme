import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToDo } from './actions/todos';
import './App.css';

class App extends Component {

  state = {
    todo: ''
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    this.props.dispatch(addToDo(this.state.todo));
    this.setState({ todo: '' });
  }

  render() {

    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
};

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

// dispatch function is available as an argument
// const mapDispatchToProps = dispatch => {
//   return {
//     addToDo: (todo) => {
//       dispatch(addToDo(todo))
//     }
//   };
// };

export default connect(state => ({todos: state.todos}), { addToDo })(App);

