<template>
  <v-app-bar id="app-toolbar" app color="primary" dark elevate-on-scroll extension-height="40">
    <v-container class="pa-0 d-flex">
      <Logo />
      <v-spacer />
      <v-toolbar-items>
        <a
          href="https://docs.bitsong.network"
          class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
        >
          <span class="subtitle-1 text-capitalize white--text">Documentation</span>
        </a>

        <a
          href="https://btsg.community"
          class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
        >
          <span class="subtitle-1 text-capitalize white--text">Community</span>
        </a>

        <a
          href="https://medium.com/@bitsongofficial"
          class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
        >
          <span class="subtitle-1 text-capitalize white--text">Blog</span>
        </a>

        <a
          href="https://bitsong.io"
          class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
        >
          <span class="subtitle-1 text-lowercase white--text">bitsong.io</span>
        </a>

        <a
          href="https://github.com/bitsongofficial"
          class="v-btn v-btn--flat v-btn--router v-btn--text theme--dark v-size--default"
        >
          <span class="subtitle-1 text-capitalize white--text">GitHub</span>
        </a>
      </v-toolbar-items>
    </v-container>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  components: {
    Logo
  }
}
</script>
