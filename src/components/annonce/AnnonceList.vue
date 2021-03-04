<script>
import store from '../../store'

export default {
  name: 'AnnonceList',
  computed: {
    // brand_cars() { return store.brand_cars; }
  }
}
</script>


<template>
  <div class="container">
  <p>Nombre des annonces : 3 annonces </p>
  <table class="table table-bordered text-center">
    <thead>
      <tr class="table-warning">
        <th scope="col">Id annonce</th>
        <th scope="col">Marque</th>
        <th scope="col">Nouveau vehicule</th>
        <th scope="col">Type de l'annonce</th>
        <th scope="col">Type de vendeur</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Abarth</td>
        <td>Oui</td>
        <td>basic</td>
        <td>professional</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>


<style>

</style>