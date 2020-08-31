// import { saludar } from './js/componentes.js';
import './styles.css'; // agregamos los estilos

import Vue from 'vue'
import githubs from './components/Githubs.vue'

new Vue({
  el: '#app',
  components: { githubs }
})
