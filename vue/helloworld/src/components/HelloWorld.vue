<template>
  <div>
    <div class="quote" v-for="(quote, i) in quotes" :key="i">
      {{ i }} - {{ quote.quote }}
    </div>
  </div>
</template>

<script>
  const iquotes = require('iquotes');

  export default {
    mode: 'production',
    name: 'HelloWorld',
    data: function() {
      return {
        quotes: iquotes.all()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quote {
    font-family: Lato;
    background: white;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin: 8px 16px;
    min-height: 20px;
    padding: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>
