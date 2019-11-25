import Input from './Input/input.vue'
import Button from './Button/button.vue'
import Icon from './Icon/Icon.vue'

const components = {
   install(Vue){
       Vue.component('zypcInput', Input) //name名很重要，最后引用的组件名
       Vue.component('zypcButton', Button)
       Vue.component('zIcon', Icon)
   } 
}

/* 支持使用标签的方式引入 */
if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(components);
}
export default components;