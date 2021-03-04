
<script>
import AnnonceList from '../../components/annonce/AnnonceList.vue'
import Search from '../../components/layouts/shared/Search.vue'

export default {
  components: {
    AnnonceList,
    Search  

  }
}
</script>


<template>
  <div>
    <Search></Search>
    <AnnonceList></AnnonceList>
  </div>
</template>


<style>

</style>