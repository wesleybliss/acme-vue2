<script>

import store from './vuex/store'
import { mapActions, mapGetters } from 'vuex'
import Sidebar from './components/Sidebar'

// @todo Could potentially do './styles/' + client + '/index.styl' here,
//       allowing for quick switching between clients
require('./styles/index.styl')

export default {
    store,
    computed: mapGetters([
        'countPlural'
    ]),
    methods: {
        ...mapActions([
            'increment'
        ]),
        onLangClick (lang) {
            this.setLang(lang) // mixin method
            this.increment() // store action
        }
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
            
            div
                button(
                    @click="setLang(lang)",
                    v-for="lang in locales",
                    :disabled="isLang(lang)") {{ $t('locales.'+ lang) }}
            hr
            div
                button(@click="increment") {{ $tc('messages.counter', countPlural, { n: $store.state.count }) }}
            
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
