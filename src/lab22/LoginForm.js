import React, { Component } from 'react';
//Uncontrolled Components
//1) In most cases, It is recommend using controlled components to implement forms.
//2) In a controlled component, form data is handled by a React component.
//3) The alternative is uncontrolled components, where form data is handled by the DOM itself.
//4) To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
class LoginForm extends Component {
  static defaultProps = {
    username: '',
    password: '',
  };
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef(); //300
    this.passwordInput = React.createRef(); //500
  }
  myclickHandler = (myevent) => {
    myevent.preventDefault();
    console.log('myclickHandler');
    console.log('UN : ', this.usernameInput.current.value);
    console.log('PW : ', this.passwordInput.current.value);
  };
  mysubmitHanlder = (myevent) => {
    myevent.preventDefault();
    console.log('mysubmitHanlder');
    console.log('UN : ', this.usernameInput.current.value);
    console.log('PW : ', this.passwordInput.current.value);
    //Do the Validations
    //Make API Calls
    //Reset the Form
  };
  render() {
    return (
      <div className="container col-md-6">
        <h2 className="text-center">Login Form</h2>
        <form onSubmit={this.mysubmitHanlder}>
          <table className="table table-striped table-bordered table-light">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="username"> Username </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control form-control-lg"
                    placeholder="Enter Username..."
                    defaultValue={this.props.username}
                    ref={this.usernameInput}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password"> Password </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Enter Password..."
                    defaultValue={this.props.password}
                    ref={this.passwordInput}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <button
                    type="submit"
                    onClick={this.myclickHandler}
                    className="btn btn-primary btn-lg"
                  >
                    <h2>Login Now</h2>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          Welcome to {this.props.username}
        </form>
      </div>
    );
  }
}
export default LoginForm;
