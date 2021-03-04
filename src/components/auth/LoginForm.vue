
<script>
import store from '../../store'

export default {
  name: 'LoginForm',
  data() {
    return {
      userFields: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    handleAction(action, payload) {
      store.dispatch(action, payload);
    }
  }

}
</script>


<template>
  <div class="row justify-content-center align-items-center pt-5">
    <div class="col-lg-4 col-md-6 col-sm-9 border pt-3 pb-5">
      <div class="mb-5 text-center">
        <a href="javascript:;">
          <img
            src="img/logo.png"
            alt=""
            class="mb-2"
          />
        </a>
        <h4>Connexion</h4>
      </div>
      <form @submit="handleAction('auth/loginUserAction', userFields)" novalidate="novalidate">
        <div class="mb-5 text-left">
          <div class="form-group">
            <input type="email" placeholder="Adresse email" autocomplete="true" v-model="userFields.email" class="form-control" />
            <!----><!---->
          </div>
          <div class="form-group">
            <input type="password" placeholder="Mot de passe" v-model="userFields.password" class="form-control" />
            <!---->
          </div>
        </div>
        <button type="submit" class="btn rounded btn-warning btn-block text-white">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<style>

</style>