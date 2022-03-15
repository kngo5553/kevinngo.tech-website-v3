<style scoped src="@/assets/typewriter.css">
</style>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-row justify="center">
          <v-card shaped max-width="450">
            <v-card-title>
              <v-row justify="center">
                <h1>Kevin Thach Ngo</h1>
              </v-row>
            </v-card-title>
            <v-card-subtitle class="typewriter py-0">
              <span class="typewriter-text">Software Engineer</span>
            </v-card-subtitle>
            <v-card-text class="subtitle-1">
              <p>
                Hey, welcome to my simple website. Important links are at the
                top, contact information is here, and my work timeline is right
                below.
              </p>
              <p><strong>Mobile number:</strong> 0423031873</p>
              <p><strong>Email:</strong> kevin.thach.ngo@gmail.com</p>
              <p><strong>Current Location:</strong> Sydney, NSW, Australia</p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-timeline dense>
          <v-timeline-item
            icon="mdi-clipboard-account"
            color="blue darken-4 mb-3"
          >
            <v-card :ripple="{ center: true }">
              <v-card-title
                class="blue darken-4 mb-3"
                style="word-break: normal"
              >
                Career Status
                <v-spacer></v-spacer>
                {{ monthYear }}
              </v-card-title>
              <v-card-text>
                <h2>
                  Currently working full-time as Software Engineer at Service
                  NSW.
                </h2>
                <br />
                <p class="subtitle-1">
                  <b>SNSW Bushfire Support Digital | Crisis Response Team</b>
                </p>
                <p class="subtitle-1">Front end: ReactJS</p>
                <p class="subtitle-1">
                  Back end: Apigee, Java/Kotlin, SQL, MongoDB
                </p>
                <p class="subtitle-1">CI/CD: Gitlab, TAS/Cloud Foundry</p>
                <p class="subtitle-1">
                  Testing: Jest, React Testing Library, TestCafe, JUnit, Cypress
                </p>
                <p class="subtitle-1">
                  Other: Jira, Confluence, Miro, Abstract
                </p>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            v-for="item in items"
            :key="item.id"
            :icon="item.icon"
            :color="item.colourClass"
          >
            <v-lazy
              v-model="item.isActive"
              :options="{
                threshold: 0.5,
              }"
              class="fill-height"
              transition="fade-transition"
            >
              <v-card class="fill-height">
                <v-card-title
                  class
                  :class="item.colourClass"
                  style="word-break: normal"
                >
                  <span class="pr-0"
                    >{{ item.title }} | {{ item.subtitle }}</span
                  >
                  <v-btn
                    v-if="item.subtitleLink"
                    :href="item.subtitleLink"
                    target="_blank"
                    text
                    small
                  >
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <span class="text-right">{{ item.date }}</span>
                </v-card-title>

                <!-- <v-img :src="item.imgSrc"></v-img> -->
                <v-carousel
                  cycle
                  interval="15000"
                  hide-delimiter-background
                  show-arrows-on-hover
                >
                  <v-carousel-item
                    v-for="img in item.images"
                    :key="img.id"
                    :src="img.src"
                    :lazy-src="placeholderSVG"
                    @click.stop="$set(dialog, img.src + item.title, true)"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                    <v-dialog
                      v-model="dialog[img.src + item.title]"
                      max-width="1600"
                    >
                      <v-img :src="img.src"></v-img>
                    </v-dialog>
                  </v-carousel-item>
                </v-carousel>

                <v-card-text class="pt-5">
                  <p class="subtitle-1" v-html="item.body"></p>
                </v-card-text>
              </v-card>
            </v-lazy>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var date = new Date();
var finalDate = months[date.getMonth()] + " " + date.getFullYear();

export default {
  name: "Home",

  data: () => ({
    dialog: {},
    monthYear: finalDate,
    placeholderSVG: "./static/placeholder.svg",
    items: [
      {
        isActive: false,
        images: [
          {
            src: "./static/fullstackdeveloper-1.png",
          },
          {
            src: "./static/fullstackdeveloper-2.png",
          },
          {
            src: "./static/fullstackdeveloper-3.png",
          },
        ],
        colourClass: "deep-orange darken-4",
        title: "FULL STACK DEVELOPER",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-star-circle",
        date: "August 2019 - September 2020",
        body: `<strong>Technologies used: </strong> AngularJS, Entity Framework 6, ASP.NET Web API 2, SQL Server 2017.
        <br /><br />
        <div class="text-left">
        Star Maths Online is a startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on the Parent platform with a small team. 
        <br /><br />
        The Parent platform consist of a web and mobile app. The goal of the platform to provide an accessible portal for Parent users where they are able to
        manage child (Student) users and view data analytics regarding their child's performance and growth. Example features include managing subscriptions and dynamic 
        "smart" charts with selectable datapoints. Please note that more advanced management features and data analytics are present in the Teacher and School platforms.
        <br /><br />
        I worked on cleaning and updating the existing codebase while creating new features. My major achievement during this role was the creation of a new registration 
        and payment flow. The previous code had intertwined registration and payment flow; the codebase was a clear case of "spaghetti code" as well. As a result, I rebuilt/refactored most of the relevant code so that registration and 
        payment were decoupled, built a new frontend flow with new backend APIs, added in new feature requirements (like a survey and notification reminders for payment), 
        and created a trial and subscription management system with Stripe and PayPal.
        <br /><br />
        It is also worth noting that I learnt the MERN stack and Vue in preparation of a technology shift that was ultimately postponed.
        </div>`,
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/gamedev-1.png",
          },
          {
            src: "./static/gamedev-2.png",
          },
          {
            src: "./static/gamedev-3.png",
          },
          {
            src: "./static/gamedev-4.png",
          },
        ],
        colourClass: "purple darken-4",
        title: "GAME DEVELOPER",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-gamepad-square",
        body: `<strong>Technologies used: </strong> Phaser.io, Node.js, Express, Cocos2d, SQL Server 2017.
        <br /><br />
        <div class="text-left">
        Star Maths Online is startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on the Student platform with a small team. 
        <br /><br />
        The Student platform consist of a video game available on web and mobile devices. The game's main feature is gamified educational content know as <i>Questions</i>. The other features all serve
        to promote engaging in Questions. Examples include leaderboards, purchaseable cosmetic content, room customisation, and educational mini-games (to prevent burnout). All of these Questions
        are tracked using various metrics, the data analysed, and then displayed as information analytics in the Parent, Teacher, and School platforms.
        <br /><br />
        My role was to add in new engagement features, fix existing bugs, and update the quality of life. The engagement features were my most important contributions in this role. They were:
        <p class="subtitle-1">A smart one-step "Play Now" button for Questions that skipped several click and automatically chose a substrand topic based on history.</p>
        <p class="subtitle-1">A new "event" system to engage users on a daily, weekly, and monthly basis.</p>
        <p class="subtitle-1">An updated character creation and pet selection process with more interactivity and involvement.</p>
        <p class="subtitle-1">An onboarding process that was the game's first tutorial/guide system.</p>
        <p class="subtitle-1">An in-game communications system in the form of a mailbox.</p>
        <p class="subtitle-1">And more minor work such as updating leaderboards.</p>
        <br />
        It is also worth noting that the game's engine technology was shifted to Cocos2d. I played a key role in supporting this technology shift but did not 
        continue to work on the game after it was finished.
        </div>`,
        date: "July 2018 - August 2019",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/matchm-1.png",
          },
          {
            src: "./static/matchm-2.png",
          },
          {
            src: "./static/matchm-3.png",
          },
        ],
        colourClass: "green darken-4",
        title: "FOUNDER",
        subtitle: "NCCorp Pty Ltd",
        subtitleLink: "",
        icon: "mdi-account-voice",
        body: `<strong>Technologies used: </strong> Unity, GameSpark, HTML/CSS/JS, Bootstrap
        <br /><br />
        <div class="text-left">
        NCCorp Pty Ltd was my own personal startup company comprised of another founder and one project. The project was tentatively titled "MatchM" and worked on by the
        founders and two other developers.
        <br /><br />
        MatchM was envisioned to a social gaming platform containing a diverse range of small social mini-games where communication and other social elements were key. The ultimate goal of this product
        was to create deeper online non-romantic relationships and thus leading to new friendships. MatchM was set to be released on mobile and would be all ages with an initial
        target audience of young adults due to market research and familiarity of the age group.
        <br /><br />
        Everyone on the team was inexperienced with Unity but I had the most developer experience. Along with my role as founder, I played both a leadership and mentor role to the 
        team while professionally developing myself. The noteworthy aspect of this role wasn't my technical improvements of the product; it was all the project management experience and
        business skills I obtained. A reoccurring example is spliting personal and project time management. I had to constantly juggle between personal learning of Unity, teaching said learning 
        to the rest of the team, helping out with the business aspects of the company, and actually developing the product. This experience has helped my immensely and the skills have transferred to
        all of my future work. 
        <br /><br />
        Note: The product never got out of Alpha stage but both me and the founder have agreed that we may pursue this startup again in the future when more experience and funding is achieved.
        </div>`,
        date: "August 2018 – August 2019",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/intern-1.png",
          },
          {
            src: "./static/intern-2.png",
          },
          {
            src: "./static/intern-3.png",
          },
        ],
        colourClass: "light-blue darken-4",
        title: "DEVELOPER INTERN",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-gamepad-variant",
        body: `<strong>Technologies used: </strong> HTML, CSS, JavaScript, Internal content authoring tool
        <br /><br />
        <div class="text-left">
        Star Maths Online is startup product comprised of four major platforms: Student, Parent, Teacher, and School. In this role, I mostly worked on content creation for the Student platform within a small team. 
        <br /><br />
        I worked on creation and quality control of <i>Questions</i> in the Student game. Questions were gamified educational content that Students would answer, allowing the game
        to collect data and provide analytics to Parents, Teachers, and Schools. These Questions were produced using an internal content authoring tool. However, this tool was
        often restrictive and regular JavaScript was often used on top.
        <br /><br />
        My most noteworthy achievement was my ability to meet KPIs and deliver beyond expectations. I consistently finished more Questions than my internship counterparts and in
        the latter half of my internship, I was delegated to quality control. One of the biggest issues regarding quality control was the content delivered by the Vietnam team. It was 
        often subpar in quality containing many errors, not covering corner cases, and bad "shortcuts" in code. Combined with the language barrier, this experience really served to 
        improve my communication skills between both the Australian and Vietnamese team.
        <br /><br />
        The quality control component of my role was also commended. It trained me to have a more critical eye and write cleaner, more efficient code.
        </div>`,
        date: "January 2018 - July 2018",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/warwick-1.png",
          },
          {
            src: "./static/warwick-2.png",
          },
        ],
        colourClass: "red darken-4",
        title: "FOOD & BEVERAGE ATTENDANT",
        subtitle: "The Warwick Tavern",
        subtitleLink: "https://thewarwick.com.au/",
        icon: "mdi-food-fork-drink",
        body: `<strong>Technologies used: </strong> My body
        <br /><br />
        <div class="text-left">
        This was a casual job with near full-time hours. The Warwick was capable of holding up to 400 customers. It contained several bars, a dining area, and an open kitchen.
        <br /><br />
        I worked in a large and diverse team of over two dozen. I mostly served on the floor but I am certified to serve alcohol and work in gaming areas (RSA and RCG). As a consequence,
        I worked occasionally as a bartender whenever needed.
        <br /><br />
        The biggest take from this job was the ability to work effectively as a large team in a fast paced environment. The sense of camaraderie I felt when working here is something
        that I still remember. I still say that I worked here more for the people than the company.
        </div>`,
        date: "January 2018 - July 2018",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/physio-1.png",
          },
          {
            src: "./static/physio-2.png",
          },
          {
            src: "./static/physio-3.png",
          },
        ],
        colourClass: "cyan darken-4",
        title: "DATA ENTRY PROJECT",
        subtitle: "Private Freelancer Contract",
        subtitleLink: "",
        icon: "mdi-database-edit",
        body: `<strong>Technologies used: </strong> Electron, HTML, CSS, JavaScript
        <br /><br />
        <div class="text-left">
        I was contacted by a friend's Aunt who owned a physiotherapy practice. One of their many issues was data entry. The existing employees would struggle to timely record the
        full dataset and if abbreviated, they would spend too long typing into an outdated system. This data would often contain crucial and sensitive patient data as well.
        <br /><br />
        So, I developed a fat client using Electron. This fit the requirements of being offline, portable in a USB stick, useable on all devices that support chrome, and had password
        protection. The data consisted of mostly technical jargon and there were many attempts at organisation. The data entry was also focused mostly on mouse selection or autofill
        fields as typing speeds were slow. A live preview of the potential end product was also displayed to help maintain correctness. At the end, the user could output the entire
        data in full or abbreivation. Sensitive patient data was also able to be inputted. Afterwards, a simple copy and paste was the final step in their workflow.
        <br /><br />
        Please note that in the screenshots above, sensitive data inputs have not been shown. Also, the codebase is not available publicly.
        </div>`,
        date: "July 2016 - August 2016",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/tutor-1.png",
          },
          {
            src: "./static/tutor-2.png",
          },
        ],
        colourClass: "brown darken-4",
        title: "PRIVATE TUTORING FOR HSC",
        subtitle: "Private",
        subtitleLink: "",
        icon: "mdi-teach",
        body: `<strong>Technologies used: </strong> Skype, Google Docs
        <br /><br />
        <div class="text-left">
        A simple tutoring job that was done mostly in my spare time. I tutored several kids that were gained through close connections. Tutoring was done mostly in-person at home,
        external communications through skype, and note sharing through images and Google Docs. I mostly taught 3 unit Mathematics and IPT based on the NSW curriculum at the time.
        </div>`,
        date: "2016 - 2017",
      },
      {
        isActive: false,
        images: [
          {
            src: "./static/rateit-1.png",
          },
          {
            src: "./static/rateit-2.png",
          },
        ],
        colourClass: "indigo darken-4",
        title: "RateIT",
        subtitle: "Capstone Project",
        subtitleLink: "./static/rateitposter.pdf",
        icon: "mdi-bus-multiple",
        body: `<strong>Technologies used: </strong> Bootstrap, Google App Engine, Python, PostgreSQL, Jinja2, jQuery.
        <br /><br />
        <div class="text-left">
        A web application for bus that allows real-time communication between operators and passengers. Released on both desktop and mobile.
        <br /><br />
        This was my capstone project at the University of Sydney. It was significant due to the fact that we dealt with a real client with a real product. The client
        was also non-technical prompting much growth in communication and project skills.
        <br /><br />
        The project was successful enough to warrant a newspaper article as well.
        <br />
        Click  
        <a href="https://www.theaustralian.com.au/business/business-spectator/news-story/smartphone-app-to-track-public-transport-woes/e14327cc0043c5d2a34543109291ea89"
          target="_blank">here for the article.</a>
        <br />
        <a href="./static/article.png"
          target="_blank">Mirror screencap if there is paywall.</a>

        </div>`,
        date: "2014 - 2014",
      },
    ],
  }),
};
</script>