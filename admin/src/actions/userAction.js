import axios from 'axios';
axios.defaults.withCredentials = true

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const FETCH_USER_SUCCESS= 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';


export const getUser = history => dispatch => {
  dispatch({ type: FETCH_USER_DATA })
  axios
    .get('https://speak-out-be-staging.herokuapp.com/user')
    .then(res => {
      console.log('user', res)
       let checkAuth = res.data.autenticated
       if (!checkAuth) {
        history.push('/login')
       } else {
        dispatch({type: FETCH_USER_SUCCESS, payload:res.data})
       }
         
          
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_FAILURE, payload: err})
    })
  }
