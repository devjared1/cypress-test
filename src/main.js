// Application
import App from './App'
import { createApp } from 'vue'

// Plugins
// import { registerPlugins } from '@/plugins'
// import vuetify from '@/plugins/vuetify'
import { registerPlugins } from './plugins'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .mount('#app')
