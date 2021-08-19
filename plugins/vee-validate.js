import Vue from 'vue'
import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize,
} from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import th from 'vee-validate/dist/locale/th.json'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule])
})

localize('th', th)