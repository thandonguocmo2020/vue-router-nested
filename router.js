import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/Hello'
import Login from '@/views/auth/login'
import Data from 'jsonData.js'

Vue.use(Router)

const router_defined = []

for(let i = 0; i< Data.length; i++){
    // How to create multi-level menu definition 
}

const routes = [
    router_defined
]

const router = new Router({
  mode: 'history',
  routes
})


export default router

