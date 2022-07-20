import Vue from 'vue'
import Chartkick from 'vue-chartkick'
// import Chart from 'chart.js'
import Highcharts from 'highcharts'

Chartkick.configure({
  mapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
})

// Vue.use(Chartkick.use(Chart))
Vue.use(Chartkick.use(Highcharts))
