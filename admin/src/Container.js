import React,{ useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {getUser} from './actions/userAction'
import {connect} from 'react-redux';
import {withRouter} from "react-router";

import Login from './components/Login.js'
import HomePage from './components/HomePage.js';
import Students from './components/Students.js'


const Container = props => {
  const [user, setUser] = useState()
  useEffect(() => {
    props.getUser(props.history, user)
  }, [])

    return (
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route  path="/login" component={Login} />
        <Route  path="/students" component={Students} />
      </div>
    );
  }

  const mapStateToProps = state => {
    return {
      isLoading: state.userReducer.isLoading,
      isFetchingData: state.userReducer.isFetchingData,
    }
  }

  export default withRouter(
    connect(
      mapStateToProps, {
        getUser
      }
    )(Container));