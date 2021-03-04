import axios from '../../config/axios';
import router from '../../router'

const cars = {
  namespaced: true,
  state: {
    brand_cars: [],
    car_models: [],
    isBrandCarsLoaded: false,
    isCarModelsLoaded: false
  },
  mutations: {
    // BRAND CARS
    SET_BRAND_CARS(state, payload) { state.brand_cars = payload; },
    SET_BRAND_CARS_LOADED(state, payload) { state.isBrandCarsLoaded = payload; },

    // CAR MODELS
    SET_CAR_MODELS(state, payload) { state.car_models = payload; },
    SET_BRAND_CARS_LOADED(state, payload) { state.isCarModelsLoaded = payload; },
  },
  actions: {
    // BRAND CARS
    async FetchBrandCars({commit}) {
      await axios.get('/brand_cars')
      .then(({data: {data}}) => {
        commit('SET_BRAND_CARS', data.items);
        commit('SET_BRAND_CARS_LOADED', true);
      })
        .catch((err) => console.log("err brandCars", err));
    },
    // CARS MODELS
    async FetchCarModels({commit}, payload) {
      await axios.get(`/brand_cars/${payload.id}/model_cars`)
        .then(({data: {data}}) => {
          commit('SET_CAR_MODELS', data.models);
          commit('SET_CAR_MODELS_LOADED', true);
        })
        .catch((err) => console.log("err brandCars", err));
    },

  },
}

export default cars