
<script>
import Header from '../shared/Header.vue'
export default {
  components: { Header },
  name: 'Layout'  
}
</script>

<template>
  <div class="">
    <slot>
      <Header></Header>
    </slot>
  </div>
</template>


<style>

</style>