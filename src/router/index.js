import Vue from 'vue'
import Router from 'vue-router'
import AddressEdit from '../page/AddressEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressEdit',
      component: AddressEdit
    }
  ]
})
