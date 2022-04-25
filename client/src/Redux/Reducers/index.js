import {combineReducers} from 'redux'
import UserReducer from './UserReducer'
import errorReducer from './errorReducer'
import AnnonceReducer from './AnnonceReducer'
const rootReducer = combineReducers({UserReducer,errorReducer,AnnonceReducer })

export default rootReducer