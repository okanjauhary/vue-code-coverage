<template>
  <div class="hello">
    <h1>Counter Aplication</h1>
    <h2>Current Number is {{ count }}</h2>
    <button @click="handleChangeCount">Tambah</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      count: 2
    }
  },
  methods: {
    handleChangeCount () {
      this.count += 2
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
