import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { logout, getAPI, getUser } from '../actions'


function HomePage(props) {
  const [state, setState] = useState(false)
  
  const logoutHandler = () => {
    props.logout(props.history, state)
    setState(true)
  }

  //test cookie, delete it when we have real data
  useEffect(() => {
    props.getAPI()
  },[])

  return (
      <div>
        <div>
          <h1>Home Page</h1>
          <h2>Speak Out is maintaining the website</h2>
          <p>Coming Soon...</p>
          <Link to='/students'>Students</Link> <br/>
          <button onClick={logoutHandler}>Logout</button>
        </div>
      </div>
  ) 

}

const mapStateToProps = state => {
    return {
      isLoading: state.logoutReducer.isLoading,
      isLoggedOut: state.logoutReducer.isLoggedOut,
    };
  };

export default withRouter(
    connect(
      mapStateToProps,
      { logout, getAPI, getUser }
      )(HomePage)
    )

