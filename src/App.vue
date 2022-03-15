<template>
  <v-app>
    <v-app-bar
      app
      dense
    >
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
        href='./static/resume-aug-2020v2.pdf'
        target="_blank"
        text
      >
        <span class="mr-2">Resume</span>
        <v-icon>mdi-file-account</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <span class="d-sm-block d-none">Powered by</span>
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
