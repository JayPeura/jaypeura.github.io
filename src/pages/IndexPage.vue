<template>
  <q-page padding>
    <div class="container">
      <q-img
        v-if="$q.screen.gt.xs"
        src="../assets/selfie.png"
        class="isNotMobile"
        @click="imgModal = true"
      />
      <div class="textContainers">
        <div class="greetingContainer">
          <div class="contentContainer">
            <h4>
              <span class="greeting">Hello! I'm </span>
              <span class="name">Jenna Peura</span>
            </h4>
          </div>
          <div class="contentContainer">
            <q-img
              v-if="$q.screen.lt.sm"
              src="../assets/selfie.png"
              class="isMobile"
              @click="imgModal = true"
            />
          </div>
        </div>

        <div class="welcomeText">
          <p>
            Welcome to my page! I focus on front-end development but I pretty
            much handle back-end as well. I am very passionate about programming
            and it shows from all my different projects and my never-ending
            thrist for learning!
          </p>
        </div>
      </div>
    </div>

    <!-- Modal for img largening -->
    <q-dialog v-model="imgModal">
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
          <q-img src="../assets/selfie.png" width="250px" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const imgModal = ref(false);
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  .q-img {
    border-radius: 15px;
    margin: 0;
  }
}

.isMobile {
  width: 100px;
  height: 100px;
}

.isNotMobile {
  width: 300px;
}

.greetingContainer {
  display: flex;
  flex-direction: row;
}

.contentContainer {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

h4 {
  display: flex;
  flex-direction: column;
  margin: 5px 0 0 15px;
  font-size: 30px;
}

.name {
  color: rgb(134, 59, 255);
  font-weight: bold;
}

.welcomeText {
  margin: 20px;
  width: 280px;

  p {
    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
}
</style>
