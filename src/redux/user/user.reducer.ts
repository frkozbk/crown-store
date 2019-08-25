import {UserActionTypes,TOGGLE_USER,UserInterface} from './user.types'

const initialState:UserInterface={
    isLoggedIn:false
};

const userReducer= (state=initialState,action:UserActionTypes):UserInterface=> {
    switch (action.type) {
        case TOGGLE_USER:
            return {...state,isLoggedIn:!state.isLoggedIn}
        default:
            return state;
    }

}

export default  userReducer