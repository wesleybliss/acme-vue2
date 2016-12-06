import {
    INCREMENT,
    SET_TOKEN,
    SET_USER
} from './mutation-types'

import * as api from '../services/api'
import { ADD_TOAST_MESSAGE } from 'vuex-toast'

export const increment = ({ commit }) => commit( INCREMENT )

export const setToken = ({ commit }, token ) => commit( SET_TOKEN, token )

export const setUser = ({ commit }, user ) => commit( SET_USER, user )

export const login = ({ commit, state, dispatch }) => {
    
    let token = false
    
    try {
        token = state.token
    }
    catch (e) {
        // Token not set yet
    }
    
    if ( !token )
        return dispatch( ADD_TOAST_MESSAGE, {
            text: 'You need a token first',
            type: 'error'
        })
    
    api.login( token )
        .then( res => {
            
            commit( SET_USER, res )
            
            dispatch( ADD_TOAST_MESSAGE, {
                text: 'Logged in',
                type: 'success'
            })
            
        })
        .catch( err => {
            
            let msg = 'An unknown error occurred, ' + JSON.stringify(err)
            
            try {
                msg = `
                    <b>${err.response.data.error.type}</b>
                    <i>(${err.response.data.error.code}</i>)
                    ${err.response.data.error.message}`
            }
            catch (e) {}
            
            dispatch( ADD_TOAST_MESSAGE, {
                text: msg,
                type: 'error'
            })
            
        })
    
}
