<template>
  <router-link
    :to="{
      name: 'Home',
      params: {
        lang: $route.params.lang
      }
    }"
    aria-label="Vuetify Home Page"
    class="d-flex align-center"
    title="Vuetify Home Page"
    @click.native="$vuetify.goTo(0)"
  >
    <v-img
      alt="btsg.dev logo"
      class="shrink"
      contain
      min-width="155"
      src="/logo-white.svg"
      width="155"
    />
  </router-link>
</template>
