require('./bootstrap');

window.Vue = require('vue').default;
Vue.component('app', require('./vue/app.vue').default);


const app = new Vue({
    el: '#app',
    // components:{App}
});
