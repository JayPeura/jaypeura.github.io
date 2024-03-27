<template>
  <q-page class="column items-center" padding>
    <div
      :class="
        'funFactPanels' + ($q.screen.lt.md ? ' isMobile' : ' isNotMobile')
      "
    >
      <q-tabs v-model="tab" mobile-arrows outside-arrows>
        <q-tab name="age" icon="cake" label="Birthday" />
        <q-tab name="hobbies" icon="gamepad" label="Hobbies" />
        <q-tab name="pets" icon="pets" label="Pets" />
        <q-tab name="history" icon="history" label="History" />
        <q-tab name="favourites" icon="favorite" label="Favourites" />
        <q-tab name="languages" icon="language" label="Languages" />
        <q-tab name="skills" icon="plus_one" label="Skills" />
        <q-tab name="experience" icon="star" label="Experience" />
      </q-tabs>
      <br />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="age">
          <div class="text-h6 text-bold">Age</div>
          I am 26 years old. My birthday is on the 7th of February!
        </q-tab-panel>

        <q-tab-panel name="hobbies">
          <div class="text-h6 text-bold">Hobbies</div>
          I love video games, programming and reading! I also do a fair share of
          cooking and baking (:
        </q-tab-panel>

        <q-tab-panel name="pets">
          <div class="text-h6 text-bold">
            Pets
            <span class="psst">(by clicking you can see them!!)</span>
          </div>
          I have 2 pets; a 6-year-old tabby cat
          <span
            class="maiq"
            title="Click me for a pic (;"
            @click="maiqModal = true"
            >M'aiq the Liar</span
          >
        </q-tab-panel>

        <q-tab-panel name="history">
          <div class="text-h6 text-bold">History</div>
          I have always been excited about computers ever since my uncle and dad
          got me into it at a young age. I am a self-taught programmer (<b
            >over 5 years</b
          >
          as a hobby), more than 1 year of work experience and I am either
          practicing programming or searching for information about it almost
          every day. <br /><br />I actually orginally studied to be an animal
          care attendant but found my true calling during my studies, decided to
          go through my studies of animals and then swap career paths and I have
          not regretted a single moment of it!
        </q-tab-panel>

        <q-tab-panel name="favourites">
          <div class="text-h6 text-bold">Favourite things</div>

          <q-list separator>
            <q-item v-for="(item, index) in favs" :key="index">
              <q-item-section top avatar>
                <q-avatar
                  color="black"
                  text-color="white"
                  icon="favorite"
                  size="md"
                /> </q-item-section
              ><q-item-section>
                <q-item-label>{{ item.thing }}</q-item-label>
                <q-item-label caption lines="2">{{ item.desc }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="languages">
          <div class="text-h6 text-bold">Languages</div>
          <q-list separator>
            <q-item v-for="(item, index) in languages" :key="index">
              <q-item-section top avatar>
                <q-avatar
                  color="black"
                  text-color="white"
                  icon="translate"
                  size="md"
                /> </q-item-section
              ><q-item-section>
                <q-item-label>{{ item.lang }}</q-item-label>
                <q-item-label caption lines="2">{{ item.level }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="skills">
          <div class="text-h6 text-bold">Skills</div>
          <q-list separator>
            <q-item v-for="(item, index) in skills" :key="index">
              <q-item-section top avatar>
                <q-avatar
                  color="black"
                  text-color="white"
                  icon="code"
                  size="md"
                /> </q-item-section
              ><q-item-section>
                <q-item-label>{{ item.skill }}</q-item-label>
                <q-item-label caption lines="2">{{ item.level }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-tab-panel>

        <q-tab-panel name="experience">
          <div class="text-h6 text-bold">Experience</div>
          <br />

          <h6>
            <span class="when">01/2023 - PRESENT</span> Junior Software
            Developer - <span class="company">Momio ApS</span>
          </h6>
          <p>
            Done some old syntax vanilla JavaScript, HTML + CSS and Java (+
            .jsp). Familiar with Tomcat and SVN.
          </p>

          <h6>
            <span class="when">04/2022 - 07/2022</span>
            Trainee Software Developer -
            <span class="company">Sofia Digital</span>
          </h6>
          <p>
            Worked with TV streaming apps like C More or Jupiter. I did mostly
            HTML, CSS, Vue.js and vanilla JavaScript. I also tested with
            televisions.
          </p>
          <q-separator spaced="lg" inset />
          <div class="text-h6 text-bold">Education</div>
          <br />

          <h6>
            <span class="when">10/2021 - 07/2022</span> Trainee Academy -
            <span class="company">Buutti Oy</span>
          </h6>
          <p>
            Studied mainly front-end coding with ReactJS and regular JavaScript.
          </p>
        </q-tab-panel>
      </q-tab-panels>
    </div>

    <q-dialog v-model="maiqModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            @click="imgModal = false"
          />
        </q-card-section>

        <q-card-section>
          <q-img src="../assets/Maiq.jpg" width="270px" />
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="kataModal">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <q-space />
          <q-btn
            icon="close"
            flat
            round
            dense
            v-close-popup
            @click="imgModal = false"
          />
        </q-card-section>

        <q-card-section>
          <q-img src="../assets/Kata.jpg" width="270px" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
const tab = ref("age");
const maiqModal = ref(false);
const kataModal = ref(false);

const skills = ref([
  {
    skill: "JavaScript",
    level: "Good",
  },
  {
    skill: "HTML",
    level: "Good",
  },
  {
    skill: "CSS",
    level: "Good",
  },
  {
    skill: "Vue",
    level: "Great",
  },
  {
    skill: "React",
    level: "Good",
  },
  {
    skill: "Java",
    level: "Basics",
  },
  {
    skill: "Git",
    level: "OK",
  },
  {
    skill: "MySQL",
    level: "Basics",
  },
]);

const favs = ref([
  {
    thing: "My friends",
    desc: "I love my friends, wouldn't be here without them!",
  },
  {
    thing: "Food",
    desc: "I absolutely love food, trying out new food and improving old dishes.",
  },
  {
    thing: "Coffee",
    desc: "I don't believe I could function well without it.",
  },
  {
    thing: "My pets",
    desc: "My precious pets provide me fulfillment in life <3",
  },
  {
    thing: "Computer stuff",
    desc: "I am nerd for computer stuff..!",
  },
  {
    thing: "Work",
    desc: "I really love what I do!",
  },
]);

const languages = ref([
  { lang: "English", level: "Great" },
  {
    lang: "Finnish",
    level: "Native",
  },
]);
</script>

<style lang="scss">
.funFactPanels {
  .q-tab-panels {
    border-radius: 10px;
    background: linear-gradient(
      rgb(172, 172, 172),
      rgb(214, 214, 214),
      rgb(156, 156, 156)
    );
    transition: transform 0.1s linear;
    max-width: 550px;

    &:hover {
      transform: scale(1.02);
    }
  }
}
.isMobile {
  width: 330px;
}
.isNotMobile {
  width: 550px;
}
.maiq,
.kata {
  cursor: pointer;
  text-decoration: underline;
  color: rgb(111, 0, 255);
}

.psst {
  font-size: 12px;
}

.q-item__label {
  font-weight: bold;
}

.company {
  color: rgb(142, 56, 255);
}

h6 {
  margin: 0;
  font-size: 18px;
}

.when {
  position: relative;
  top: -2px;
  font-size: 12px;
  background: rgb(231, 220, 255);
  padding: 4px;
  border-radius: 10px;
}
</style>
