<template>
  <v-app>
    <v-app-bar
      app
      dense
    >
      <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

      <!-- <v-spacer></v-spacer> -->

      <v-btn
        href="https://www.linkedin.com/in/kevinthachngo/"
        target="_blank"
        text
      >
        <span class="mr-2">Linkedin</span>
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        href="https://github.com/kngo5553"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        href="/static/resume-aug-2020v2.pdf"
        target="_blank"
        text
      >
        <span class="mr-2">Resume</span>
        <v-icon>mdi-file-account</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <!-- <div class="d-flex align-center"> -->
        <v-img
          alt="Vue Logo"
          class="shrink mr-2"
          contain
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
          transition="scale-transition"
          width="40"
        />
      <!-- </div> -->
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
