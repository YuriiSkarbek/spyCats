<template>
  <div class="start">
      <router-link to="/play" class="start__play">Play Game</router-link>
    </div>
</template>

<script>
export default {
  name: 'StartScreen',
  data () {
    return {
      name: 'Spy Cats'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.start{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.start__icon{
  font-size: 154px;
}

.start__text{
  font-size: 32px;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  font-weight: 300;
}

.start__play{
  display: block;
  border: 1px solid #fafafa;
  padding: 6px 24px;
  font-size: 22px;
  font-weight: 300;
  margin-top: 15px;
  cursor: pointer;
  transition: .4s;
  color: #fafafa;
  text-decoration: none;
}

.start__play:hover{
  background: #fafafa;
  color: rgb(44, 44, 44);
}
</style>
