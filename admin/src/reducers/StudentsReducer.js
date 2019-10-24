import {
    FETCH_STUDENTS_DATA,
    FETCH_STUDENTS_SUCCESS,
    FETCH_STUDENTS_FAILURE
} from '../actions';

const initialState = {
    isLoading: false,
    isFetchingData: false,
    error: null,
};

export const studentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STUDENTS_DATA:
            return {
                ...state,
                isLoading: true,
                error: null,
            }
        case  FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isFetchingData: true
            }
        case FETCH_STUDENTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        
        default:
            return state
    }
}