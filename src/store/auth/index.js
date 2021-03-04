import axios from '../../config/axios';
import router from '../../router'

const auth = {
  namespaced: true,
  state: {
    // userFields: {
    //   email: null,
    //   password: null
    // },
    userAuthData: {},
    userToken: null,
    isUserLogged: false,
  },
  getters: {
    isUserLogged(state) {
      return state.userToken !== null
    }
  },
  mutations: {
    SET_USER_AUTH(state, payload) { state.userAuthData = payload; },
    SET_USER_TOKEN(state, payload) {
      state.userToken = payload;
      localStorage.setItem('userToken', payload);
      // console.log('SET_USER_TOKEN', payload)
    },
    REMOVE_USER_TOKEN(state) {
      state.userToken = null;
      localStorage.removeItem('userToken');
    },
  },
  actions: {
    // Login user
    async loginUserAction({commit}, payload) {
      // await axios.post('/login', payload)
      await axios.post('/login', {
        email: 'Bonjour@bonjour.com',
        password: 'Bonjour2000@'
      })
      .then(({data: {data}}) => {
          commit('SET_USER_AUTH', data.user);
          commit('SET_USER_TOKEN', data.token);
          router.push({name: 'Home'});
        })
        .catch((err) => alert("err login", err));
    }, // end fun
    async logoutUserAction() {
      await axios.post('/logout');
    },
    checkLoggedUserAction (state) {
      if (state.getters.isUserLogged) {
        console.log("isuserlogged", state.getters.isUserLogged)
        router.push({name: 'Home'});
      } else {
        router.push({name: 'Login'});
      }
    }
  },
}

export default auth