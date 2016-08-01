import Vue from 'vue'
import router from './router'
import './config'
import App from './App'
import { calcREM } from '#/utils'

import './styles/index.less'

// calc rem for html root font-size
calcREM()
window.addEventListener('resize', calcREM, false)

router.start(App, '#root')
