import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fad } from '@fortawesome/pro-duotone-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)
library.add(fal)
library.add(fad)

Vue.component('VueFontawesome', FontAwesomeIcon)
