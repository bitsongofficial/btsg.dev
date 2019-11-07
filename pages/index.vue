<template>
  <section>
    <Hero />

    <v-container id="home-feature" class="py-6 py-md-12" fluid tag="section">
      <v-container class="pa-0">
        <v-row align="center">
          <v-col cols="12" align="center">
            <h2 class="display-1 font-weight-medium">Try BitSong</h2>
            <div class="mt-4 subtitle-1">currently tested on Linux Ubuntu 18.04</div>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-0">
        <v-row align="center" v-for="step in steps">
          <v-col cols="12">
            <h3 class="headline font-weight-medium">{{ step.title }}</h3>
          </v-col>
          <v-col cols="12">
            <Markup lang="bash">{{ step.content }}</Markup>
          </v-col>
        </v-row>
      </v-container>

      <v-container class="pa-0">
        <v-row align="center">
          <v-col cols="12">
            <h3 class="headline font-weight-medium">5. Run your node:</h3>
          </v-col>
          <v-col cols="12">
            <v-btn color="secondary" large outlined>Select your environment</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import Markup from '@/components/Markup'

export default {
  components: {
    Hero,
    Markup
  },
  computed: {
    steps() {
      return [
        {
          title: '1. Clone go-bitsong:',
          content: `git clone https://github.com/bitsongofficial/go-bitsong.git && cd go-bitsong`
        },
        {
          title: '2. Checkout the Testnet Branch:',
          content: `git checkout v0.2.3`
        },
        {
          title: '3. Install Dependencies:',
          content: `./scripts/dev_setup.sh`
        },
        {
          title: '4. Test commands:',
          content: `bitsongd version --long\nbitsongcli version --long`
        }
      ]
    }
  }
}
</script>
