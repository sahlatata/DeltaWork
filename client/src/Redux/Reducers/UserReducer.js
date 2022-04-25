import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/UserTypes"

const initialState = {
User : {},
errors : []
}
const UserReducer =(state=initialState,action)=>{
switch (action.type) {
case REGISTER : 
localStorage.setItem('token',action.payload.token)
return {...state,User : action.payload.newUser}
case FAIL : 
return {...state,errors:action.payload.errors,User:null}
case LOGIN : 
localStorage.setItem('token',action.payload.token)
return {...state, User : action.payload.found}
case CURRENT :
return {...state, User : action.payload} 
case LOGOUT :
localStorage.removeItem('token')
return {...state, User : null} 

default: return state
}

}
export default  UserReducer