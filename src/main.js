import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast'

Vue.use(toast);
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})