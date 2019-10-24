import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { logoutReducer } from './logoutReducer';
import { userReducer } from './userReducer';
import { studentsReducer } from './StudentsReducer'
const reducer = combineReducers({
    loginReducer,
    logoutReducer,
    userReducer,
    studentsReducer
})

export default reducer;



