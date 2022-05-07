import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import LoginForm from './lab21/LoginForm';
import Form from './otherForms/Form';
import BlogForm from './otherForms/BlogForm';
class App extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h2 className="text-center">Welcome to Java Learning Center</h2>
        </div>
        <div className="card-body">
          {/*<LoginForm /> */}
          <Form />
          <BlogForm />
        </div>
      </div>
    );
  }
}
export default App;
