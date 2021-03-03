
<script>
import Layout from './components/layouts/Layout.vue'
export default {
  components: {
    Layout
    
  }
}
</script>

<template>
  <div id="app">
    <Layout>
    </Layout>
    <router-view></router-view>
  </div>
</template>

<style>
  @import '../src/assets/css/bootstrap.min.css';
</style>
