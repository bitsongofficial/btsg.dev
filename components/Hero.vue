<template>
  <section id="home" class="white">
    <v-container
      fluid
      tag="section"
      id="home-hero"
      class="py-4 py-md-12"
      :class="$vuetify.theme.dark && 'theme--dark'"
    >
      <v-responsive min-height="30vh">
        <v-container class="pa-0">
          <v-row align="center">
            <v-col cols="12" md="5">
              <v-responsive class="overflow-visible" max-width="550">
                <div class="base-title home-hero__title mb-4">
                  <div class="markdown">
                    <h1 class="font-weight-medium white--text">btsg.dev</h1>
                  </div>
                </div>
                <div class="font-weight-light mb-3 title text--lighten-4 grey--text">
                  <div class="v-markdown">
                    <p>Our mission is to enable a simple global blockchain infrastructure that empowers the music industry.</p>
                  </div>
                </div>
                <div class="py-4"></div>
                <v-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  class="primary--text my-6"
                  color="white"
                  to="introduction/why-vuetify"
                  x-large
                >
                  <v-icon left size="20" color="primary">mdi-speedometer</v-icon>Get Started
                </v-btn>

                <v-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  class="my-6 ma-md-6"
                  color="white"
                  href="https://github.com/vuetifyjs/vuetify"
                  min-width="187"
                  outlined
                  rel="nofollower noopener"
                  target="_blank"
                  x-large
                >
                  <v-icon left size="20">mdi-github-face</v-icon>Github
                </v-btn>
              </v-responsive>
            </v-col>
            <v-col cols="12" md="7" align="right">
              <script
                id="asciicast-D1EmHqdfohpRprwGIJeUKChhQ"
                src="https://asciinema.org/a/D1EmHqdfohpRprwGIJeUKChhQ.js"
                async
              ></script>
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </v-container>
  </section>
</template>


<style lang="sass">
  #home-hero
    background: linear-gradient(to bottom, #141E30, #243B55)
    a
      color: inherit
      text-decoration: none
  .home-hero__title
    line-height: 1.2
  .v-card--hero
    background: #000
    border-radius: 6px
    height: 0
    margin: 0
    overflow: hidden
    padding-bottom: 70%
    position: relative
    width: 100%
    &__iframe
      display: block
      vertical-align: middle
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

  .base-title
    display: inline-block
    h1, h2, h3, h4, h5, h6
      display: inline-flex
      &.theme--light
        color: rgba(0, 0, 0, 0.87)
      &.theme--dark
        color: #FFFFFF
    h1
      font-size: 3rem
      font-weight: 300
    h2
      font-size: 2rem
      font-weight: 500
    h3
      font-size: 1.5rem
      font-weight: 500
</style>

