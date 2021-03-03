
<script>
export default {
  name: 'Header',
}
</script>

<template>
  <header class="px-md-4 mb-3 bg-white border-bottom border-warning">
    <nav class="navbar navbar-expand-lg navbar-light flex-md-row align-items-center p-0">
      <div class="container">
        <a href="javascript:;" class="navbar-brand pb-0">
            <img
                src="../../assets/img/logo.png"
                alt="brand logo"
            />
        </a>
        <button type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbars" class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto nav nav-tabs border-bottom-0 mt-4">
              <li class="nav-item mx-2">
                <router-link to="/" class="nav-link active bg-warning text-white border-warning">Home</router-link>
              </li>
              <li class="nav-item mx-2">
                <router-link to="/add-annonce" class="nav-link">Ajouter annonce</router-link>
              </li>
          </ul>
    
          <span class="btn nav-link p-1 mt-3 text-muted">
            #username#
          </span>
          <button type="button" class="btn nav-link p-1 mt-3 text-muted">se déconnecter</button>
    
        </div>
      </div>
    </nav>
  </header>
</template>


<style>

</style>