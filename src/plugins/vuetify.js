import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'

import colors from 'vuetify/lib/util/colors'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md' || 'fa'
  },
  theme: {
    themes: {
      light:
      {
        background: colors.shades.white,
        /** https://theme-generator.vuetifyjs.com/  */
        primary: colors.deepPurple.base,
        secondary: colors.pink.base,
        accent: colors.teal.base,
        error: colors.deepOrange.base,
        warning: colors.blue.base,
        info: colors.indigo.base,
        success: colors.green.base
      },
      dark: {
        background: colors.shades.black
      }
    }
  }

})
