
<script>
export default {
    name: 'LoginForm'
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
          <form method="post" novalidate="novalidate">
              <div class="mb-5 text-left">
                  <div class="form-group">
                      <input type="email" placeholder="Adresse email" class="form-control" />
                      <!----><!---->
                  </div>
                  <div class="form-group">
                      <input type="password" placeholder="Mot de passe" class="form-control" />
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