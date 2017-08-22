import Vue from 'vue'
import Router from 'vue-router'
import itemcontainer from '@/components/itemcontainer'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
       children: [{
        path: '',
           component: r => require.ensure([], () => r(require('../page/home')), 'home')
       }, {
           path: '/item',
           component: r => require.ensure([], () => r(require('../page/item')), 'item')
       }, {
           path: '/score',
           component: r => require.ensure([], () => r(require('../page/score')), 'score')
       }]

    }
  ]
})
