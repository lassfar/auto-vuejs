
<script>
import Header from './Header.vue'
export default {
  components: { Header },
  name: 'Layout'  
}
</script>

<template>
  <div class="container">
    <slot>
      <Header></Header>
    </slot>
  </div>
</template>


<style>

</style>