import Vue from 'vue'
import Router from 'vue-router'
import StartScreen from '@/components/StartScreen'
import PlayGame from '@/components/PlayGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartScreen',
      component: StartScreen
    },
    {
      path: '/play',
      name: 'PlayGame',
      component: PlayGame
    }
  ]
})
