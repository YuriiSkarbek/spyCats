<template>
  <div id="app">
    <header>
      <router-link to="/">
        <font-awesome-icon icon="user-secret" class="start__icon"/>
        <div class="start__text">{{name}}</div>
      </router-link>
    </header>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      name: 'Spy Cats'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
body{
  font-family: 'Open Sans', sans-serif;
  background-color: rgb(44, 44, 44);
  color: #fafafa;
  margin: 0;
  padding: 0;
  position: fixed; 
   overflow: hidden;
   top: 0; right: 0; bottom: 0; left: 0;
}

header{
  width: 100%;
  height: 50px;
  background: rgb(29, 29, 29);
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
    justify-content: space-between;
  align-items: center;

}

header a{
  color: #fafafa;
  text-decoration: none;
  display: flex;
  opacity: .8;
  transition: .3s;
}

header a:hover{
  opacity: 1;
}

header a:hover ~ header .start__icon{
  margin-right: 25px;

}

header a .start__icon{
  font-size: 36px;
  margin-right: 15px;
}

header a .start__text{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
}

.fade-enter-active, .fade-leave-active{
  /* transition-property: opacity;
  transition-duration: .4s; */
  transition: .3s;
}

.fade-enter-active{
  transition-delay: .25s;
}
.fade-enter, .fade-leave-active{
  opacity: 0;
  transform: scale(0.9);
}


</style>
