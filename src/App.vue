<template>
  <div id="app">
    <custom-table/>
  </div>
</template>

<script>
import CustomTable from './components/CustomTable.vue'

export default {
  name: 'app',
  components: {
    CustomTable
  }
}
</script>

<style>
  @import "../node_modules/ag-grid-community/dist/styles/ag-theme-balham.css";
  @import "../node_modules/ag-grid-community/dist/styles/ag-grid.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
