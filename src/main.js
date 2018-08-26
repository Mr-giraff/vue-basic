import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://wd2047331563ykfoaw.wilddogio.com/'
// axios.defaults.headers.common['Authorization'] = `key=AAAA7h7sNzw:APA91bHh2R0IRUkT0zXZnN_mA4MlZOyvQ-dnLbrcb5Ortp7Yk0taFzo8mrAJXvgGggvr1FjOGQMQR1LEQKbxFVocpnuXoZ9bBX5t_Q-AWmEAM1NsiD5rqSqnjXMzJIm-M1AxWQ2UUT1u`
// axios.defaults.headers.post['Content-Type'] = 'application/json'

// 配置Vue原型(在任何组件中都可以正常使用axios，用法:this.http===axios)
Vue.prototype.http = axios

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
