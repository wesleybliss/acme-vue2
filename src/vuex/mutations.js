import {
    INCREMENT,
    SET_TOKEN,
    SET_USER
} from './mutation-types'


export default {
    
    [INCREMENT]( state ) {
        state.count++
    },
    
    [SET_TOKEN]( state, token ) {
        state.token = token
    },
    
    [SET_USER]( state, user ) {
        state.user = user
    }
    
}
