<template>
  <div class="">
      <div class="start-text">{{randomWord()}}</div>
    </div>
</template>

<script>
export default {
  name: 'PlayGame',
  data () {
    return {
      name: 'Гра почалась',
      num: 2,
      words: ['Вишневий сад', 'Крим', 'Черепашка', 'Кордон', 'Епічне мяу'],
    }
  },
  methods: {
        randomWord: function(){
          let randomNum = Math.floor(Math.random() * this.words.length);
          return this.words[randomNum];
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
