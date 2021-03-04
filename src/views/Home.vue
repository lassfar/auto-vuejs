
<script>
import AnnonceList from '../components/annonce/AnnonceList.vue'
import Header from '../components/layouts/shared/Header.vue'
import Layout from '../components/layouts/appLayout/Layout.vue'
import Search from '../components/layouts/shared/Search.vue'
import LoginForm from '../components/auth/LoginForm.vue'
import store from '../store'

export default {
  name: 'Home',
  components: {
    Layout,
    Header,
    Search,
    AnnonceList,
    LoginForm
  },
  mounted() {
    // store.dispatch('auth/checkLoggedUserAction');
  }
}
</script>

<template>
  <div class="home">
    <Search></Search>
    <AnnonceList></AnnonceList>
  </div>
</template>