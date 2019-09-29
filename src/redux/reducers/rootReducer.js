import {combineReducers} from 'redux'
import contactFormReducer from './contactFormReducer'

const rootReducer = combineReducers({
    contactForm: contactFormReducer
})

export default rootReducer