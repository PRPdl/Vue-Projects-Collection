import Vue from 'vue';
import App from "./App.vue";
import router from "./router";

Vue.component(
  'error-class', {
    template: '<p class="active"> This is error class. </p>'
})

new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");

 