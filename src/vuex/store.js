import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
import { createModule } from 'vuex-toast'

const debug = process.env.NODE_ENV !== 'production'
Vue.config.debug = debug

Vue.use(Vuex)

const state = {
    count: 0,
    token: null,
    user: null
}

export default new Vuex.Store({
    strict: debug,
    state,
    getters,
    actions,
    mutations,
    modules: {
        toast: createModule({
            dismissInterval: 5000
        })
    },
    plugins: [
        createPersistedState({
            paths: [
                'token',
                'user'
            ]
        })
    ]
})
