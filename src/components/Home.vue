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
            <v-card-subtitle>Software Engineer</v-card-subtitle>
            <v-card-text class="subtitle-1">
              <p>Hey, welcome to my simple website. Important links are at the top, contact information is here, and my work timeline is right below.</p>
              <p>
                <strong>Mobile number:</strong> 0423031873
              </p>
              <p>
                <strong>Email:</strong> kevin.thach.ngo@gmail.com
              </p>
            </v-card-text>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-timeline dense>
          <v-timeline-item icon="mdi-clipboard-account" color="blue darken-4 mb-3">
            <v-card :ripple="{center: true}">
              <v-card-title class="blue darken-4 mb-3" style="word-break: normal">
                Employment Status
                <v-spacer></v-spacer>
                {{monthYear}}
              </v-card-title>
              <v-card-text>
                <h2>Contract ending. Looking for new employment opportunities!</h2>
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
                threshold: .5
              }"
              class="fill-height"
              transition="fade-transition"
            >
              <v-card class="fill-height">
                <!-- <v-img :src="item.imgSrc"></v-img> -->
                <v-card-title class :class="item.colourClass" style="word-break: normal">
                  <span class="pr-0">{{item.title}} | {{item.subtitle}}</span>
                  <v-btn v-if=item.subtitleLink :href=item.subtitleLink target="_blank" text small>
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <span class="text-right">{{item.date}}</span>
                </v-card-title>
                <v-img :src="item.imgSrc"></v-img>
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
var finalDate =
  date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();

export default {
  name: "Home",

  data: () => ({
    monthYear: finalDate,
    items: [
      {
        isActive: false,
        imgSrc: "https://starmathsonline.com.au/wp-content/uploads/2019/12/Teacher-Dashboard-1.png",
        colourClass: "deep-orange darken-4",
        title: "FULL STACK DEVELOPER",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-star-circle",
        date: "August 2019 - August 2020",
        body: ` •	Professionally developed self, using online courses, to learn following technologies in preparation for this role/project: MongoDB, Express, React and Redux, and Node.js.
                <br /><br />
                •	Developed new features for the Parent platform using AngularJS, ASP.NET Web API 2, Entity Framework 6, and SQL Server 2017.
                <br /><br />
                •	Created new APIs and updated existing API backend resulting in cleaner codebase and increased productivity for front end developers.
                <br /><br />
                •	Developed a new registration and payment flow (with Stripe and PayPal) alongside an increase of users.
                <br /><br />
                •	Influenced high level design decisions by participating in meetings with CEO.
                <br /><br />
                •	Assisted, worked, and communicated efficiently with external contractor in development and maintenance.
                `,
      },
      {
        isActive: false,
        imgSrc: "https://starmathsonline.com.au/wp-content/uploads/2019/12/Asset-30.png",
        colourClass: "purple darken-4",
        title: "GAME DEVELOPER",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-gamepad-square",
        body: "YOLO",
        date: "July 2018 - August 2019",
      },
      {
        isActive: false,
        imgSrc: "https://raw.githubusercontent.com/kngo5553/MatchM-Website/master/qr-code.png?token=ACFGGHHMLSSAK4MFTL2M7WK7HVDU2",
        colourClass: "green darken-4",
        title: "FOUNDER",
        subtitle: "NCCorp Pty Ltd",
        subtitleLink: "",
        icon: "mdi-account-voice",
        body: "YOLO",
        date: "August 2018 – August 2019",
      },
      {
        isActive: false,
        imgSrc: "https://image.winudf.com/v2/image1/Y29tLnN0YXJtYXRoc29ubGluZS5zdHVkZW50X3NjcmVlbl85XzE1NzkxNzkyMTJfMDEw/screen-9.jpg?fakeurl=1&type=.jpg",
        colourClass: "light-blue darken-4",
        title: "DEVELOPER INTERN",
        subtitle: "Star Maths Online",
        subtitleLink: "https://starmathsonline.com.au/",
        icon: "mdi-gamepad-variant",
        body: "YOLO",
        date: "January 2018 - July 2018",
      },
      {
        isActive: false,
        imgSrc: "https://www.weekendnotes.com/im/006/07/lamb-shank-pie-on-the-bone-the-warwick-tavern1.JPG",
        colourClass: "red darken-4",
        title: "FOOD & BEVERAGE ATTENDANT",
        subtitle: "The Warwick Tavern",
        subtitleLink: "https://thewarwick.com.au/",
        icon: "mdi-food-fork-drink",
        body: "YOLO",
        date: "January 2018 - July 2018",
      },
      {
        isActive: false,
        imgSrc: "https://i.imgur.com/w7Y0i8k.png",
        colourClass: "cyan darken-4",
        title: "DATA ENTRY PROJECT",
        subtitle: "Private Freelancer Contract",
        subtitleLink: "",
        icon: "mdi-database-edit",
        body: "YOLO",
        date: "July 2016 - August 2016",
      },
      {
        isActive: false,
        imgSrc: "https://kmscubreporter.com/wp-content/uploads/2018/04/Books.jpg",
        colourClass: "brown darken-4",
        title: "PRIVATE TUTORING FOR HSC",
        subtitle: "Private",
        subtitleLink: "",
        icon: "mdi-teach",
        body: "YOLO",
        date: "2016 - 2017",
      },
    ],
  }),
};
</script>