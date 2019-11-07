<template>
  <v-footer id="footer" class="d-block py-6" color="grey darken-4" dark>
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <v-img class="mx-auto" contain height="64px" src="/logo-square.svg" width="64px" />
        </v-col>

        <v-col cols="12">
          <a
            v-for="(social, i) in socials"
            :key="i"
            :href="social.href"
            :title="social.title"
            :aria-label="social.title"
            class="ma-4 d-inline-block"
            target="_blank"
            rel="noopener"
          >
            <v-icon dark v-text="social.icon" />
          </a>
        </v-col>

        <v-col cols="12">
          <v-responsive class="mx-auto" max-width="400">
            <v-form>
              <v-text-field
                id="member_email"
                v-model="email"
                color="secondary"
                flat
                label="Email Address"
                name="member[email]"
                rounded
                solo
                type="email"
              >
                <template v-slot:append>
                  <v-btn
                    color="secondary"
                    name="member[subscribe]"
                    type="submit"
                    value="Subscribe"
                  >Subscribe</v-btn>
                </template>
              </v-text-field>
            </v-form>
          </v-responsive>

          <div class="text-center caption">
            Subscribe to our
            <strong>developer</strong> newsletter
          </div>
        </v-col>

        <v-col cols="12">
          <v-responsive class="mx-auto" max-width="70%" width="150px">
            <v-divider />
          </v-responsive>
        </v-col>

        <v-col cols="12">
          Released under the&nbsp;
          <a
            href="https://opensource.org/licenses/MIT"
            class="grey--text text--lighten-1"
            rel="noopener"
            target="_blank"
          >MIT License</a>

          <br />

          <div
            class="mb-4"
          >Copyright &copy; 2018-{{ (new Date()).getFullYear() }} BitSong Group Ltd.</div>

          <a
            class="grey--text text--lighten-1"
            target="_blank"
            rel="noopener"
            href="https://www.iubenda.com/privacy-policy/17992525/legal"
          >Privacy Policy</a>
          <a
            class="grey--text text--lighten-1"
            target="_blank"
            rel="noopener"
            href="https://t.me/bitsong_official_group"
          >Contact Us</a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'FrontendFooter',
  data: () => ({
    email: '',
    socials: [
      {
        icon: 'mdi-reddit',
        href: 'https://www.reddit.com/r/bitsong',
        title: 'Reddit'
      },
      {
        icon: 'mdi-medium',
        href: 'https://medium.com/@BitSongOfficial',
        title: 'Medium'
      },
      {
        icon: 'mdi-github-circle',
        href: 'https://github.com/bitsongofficial',
        title: 'Github'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com/bitsongofficial',
        title: 'Twitter'
      },
      {
        icon: 'mdi-facebook',
        href: 'https://www.facebook.com/bitsongofficial',
        title: 'Facebook'
      },
      {
        icon: 'mdi-discord',
        href: 'https://discord.gg/mZC9Yk3',
        title: 'Discord Community'
      },
      {
        icon: 'mdi-telegram',
        href: 'https://t.me/bitsong_official_group',
        title: 'Telegram Group'
      }
    ]
  })
}
</script>

<style lang="sass">
  #footer
    a
      opacity: .8
      text-decoration: none
      &:hover
        color: #FFF
        opacity: 1
    .v-text-field--rounded
      .v-input__slot
        padding-right: 0 !important
      .v-btn
        border-radius: 0 28px 28px 0
        box-shadow: none
        height: 48px
        padding-top: 2px
</style>
