import React from 'react';
import './Test.css';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
      toDoList: [],
      toDoDate: []
    };
    this.submitE = this.submitE.bind(this);
    this.changeE = this.changeE.bind(this);
  }

  changeE(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitE(event) {
    event.preventDefault()
    const itemsArray = this.state.input.split(',');
    const date = new Date().toLocaleDateString()
    this.state.toDoList.push([itemsArray, ' - ', date])

    this.setState({
      input: '', //input value가 초기화됨
      submit: this.state.input

    });
  }

  deleteE(event) {
    event.target.parentNode.remove();
  }

  render() {
    const items = this.state.toDoList.map(i => <p key={i}>{i} <button onClick={this.deleteE} className="delete_btn">Delete</button> </p>);

    return (
      <div className="test">
        <h2>To Do List</h2>
        <form onSubmit={this.submitE}>
          <input onChange={this.changeE} value={this.state.input}></input>
          <button type='submit' className="submit_btn">Submit!</button>
        </form>
        {items}
      </div >
    );
  }
}

export default Test;
