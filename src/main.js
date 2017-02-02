// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import I18n from './i18n'
import router from './router'
import App from './App'

Vue.use(I18n, ['en', 'fr'])

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
