<template>
  <v-app dark>
    <Toolbar />
    <v-content>
      <v-responsive min-height="100vh">
        <nuxt />
      </v-responsive>
    </v-content>
    <Footer />
  </v-app>
</template>

<style lang="sass">
  .theme--dark.v-application
    background: #fafafa
    color: rgba(0, 0, 0, 0.87)
</style>

<script>
import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Toolbar,
    Footer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
