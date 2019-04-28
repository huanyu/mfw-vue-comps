/**
 * Created by hb on 2019/4/28.
 */
import Vue from 'vue'
import CDLabel from './cdLabel'

const Components = {CDLabel}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
