<template>
  <div class="start">
      <font-awesome-icon icon="user-secret" class="start-icon"/>
      <div class="start-text">{{name}}</div>
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

.start-icon{
  font-size: 154px;
}

.start-text{
  font-size: 32px;
  width: 100%;
  text-align: center;
  margin-top: 15px;
  font-weight: 300;
}
</style>
