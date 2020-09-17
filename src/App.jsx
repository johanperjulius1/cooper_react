import React from 'react';
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from "./Components/LoginForm";



class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false

  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });

  };

  render() {
    return (
      <>
        <InputFields onChangeHandler={this.onChangeHandler} />
        <button id="login">Login</button>
        <LoginForm />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>

    );
  }
}
  

export default App;
