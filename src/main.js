import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass, faTableColumns, faChevronRight, faFolder, faUser, faRectangleAd, faComment} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-regular-svg-icons'

library.add(faMagnifyingGlass, faBookmark, faTableColumns,faChevronRight,  faFolder, faUser, faRectangleAd, faComment)

createApp(App).component('fa', FontAwesomeIcon).mount('#app')
