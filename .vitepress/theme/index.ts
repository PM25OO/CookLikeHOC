import DefaultTheme from 'vitepress/theme'
import './style.css'
import RandomRecipe from './components/RandomRecipe.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RandomRecipe', RandomRecipe)
  }
}
