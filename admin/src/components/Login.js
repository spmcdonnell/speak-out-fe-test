import React, {useState, useEffect} from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import { login } from '../actions';
import { connect } from 'react-redux';



function Login(props) {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = e => {
    e.preventDefault();
    props.login(props.history, state)
    setState({ username: '', password: '' })
}
    return ( 
      <div>
        <form onSubmit = {handleSubmit}  >
          <fieldset>
            <label htmlFor = "email"> Email </label> 
            <input 
              style = {{marginBottom: "15px"}}
              type = "text"
              name = "username"
              placeholder = "Username"
              onChange = {handleChange}
              value = {state.username}/> 
            <label htmlFor = "password" > Password </label> 
            <input style = {{marginBottom: "15px"}}
              className = "input-class"
              type = "password"
              name = "password"
              onChange = {handleChange}
              value = {state.password} /> 
            <button type = "submit">Sign in</button> 
          </fieldset> 
        </form> 
      </div >
    )
  }
// }

const mapStateToProps = state => {
  return {
    isLoading: state.loginReducer.isLoading,
    isLoggedin: state.loginReducer.isLoggedin,
  };
};

export default withRouter(
  connect(
    mapStateToProps, {
      login
    }
  )(Login)
)