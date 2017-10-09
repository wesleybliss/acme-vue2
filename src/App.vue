<script>

import store from './vuex/store'
import { mapActions, mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'

require('./styles/index.styl')

export default {
    store,
    computed: mapGetters([
        'countPlural'
    ]),
    methods: {
        ...mapActions([
            'increment'
        ])
    },
    components: {
        'sidebar': Sidebar
    }
}

</script>

<template lang="pug">

#app
    .row-stretch
        
        sidebar
        
        section#main
            header
                h1 ACME Corp.
            
            router-view
            
            hr
            div
                button(@click="increment") {{ $store.state.count }}
            
        a#menu-toggle(href="#")
            .menu-toggle-animated
                span
                span
                span
                span
                span
                span
        
        //- toast(position="se")

</template>
