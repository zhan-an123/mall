import Toast from './Toast'
const obj = {};
obj.install = function(Vue) {

    const toastConstructor = Vue.extend(Toast);
    const toast = new toastConstructor().$mount(document.createElement('div'));
    Vue.prototype.$toast = toast;
}
export default obj;