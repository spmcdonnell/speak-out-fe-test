import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAPI } from '../actions'

function Students(props) {
  
    //test cookie, delete it when we have real data
    useEffect(() => {
      props.getAPI()
    },[])
  
    return (
        <div>
            <h2>This is Students.js</h2>
            <Link to='/'>Back to Home Page</Link>
        </div>
    ) 
  
  }
  
  const mapStateToProps = state => {
      return {
        isLoading: state.isLoading,
      };
    };
  
  export default withRouter(
      connect(
        mapStateToProps,
        { getAPI }
        )(Students)
      )
  
  