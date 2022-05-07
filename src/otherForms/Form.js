import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      comments: '',
      topic: '',
    };
  }

  handleUserNameChange = (event) => {
    console.log('handleUserNameChange');
    this.setState({
      username: event.target.value,
    });
  };
  handleCommnentsChange = (event) => {
    console.log('handleCommnentsChange');
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    console.log('handleTopicChange');
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Other Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUserNameChange}
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommnentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="react">React</option>
              <option value="java">Java</option>
              <option value="spring-boot">spring-boot</option>
              <option value="aws">AWS</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
