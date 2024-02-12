<template>
  <q-page padding>
    <div :class="'container' + ($q.screen.lt.md ? ' mobile' : '')">
      <q-card
        @click="redirect(item.link)"
        class="my-card"
        v-for="(item, index) in items"
        :key="index"
      >
        <img :src="item.img" width="300px" height="300px" />
        <q-card-section>
          <div class="text-h6">{{ item.title }}</div>
        </q-card-section>
        <q-card-section>
          {{ item.desc }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const items = [
  {
    title: "Discord Bot Valerie",
    link: "https://github.com/JayPeura/ValerieBotV2.1",
    desc: "A neat little bot mostly for my own personal servers. She can play music, find and send gifs plus other fun things.",
    img: "images/Work1.png",
  },
  {
    title: "Starshifted SoMe site",
    link: "https://github.com/JayPeura/starshifted",
    desc: "I made this a bit bigger project with Vue + Quasar to create a similar site to X (ex. Twitter)",
    img: "images/stars.jpg",
  },
  {
    title: '"Better YouTube"',
    link: "https://github.com/JayPeura/BetterYouTube",
    desc: "I made this to use an API to get YouTube videos to show on my personal page, essentially making my very own YouTube except it looked prettier than the actual YouTube (;",
    img: "images/ytclone.png",
  },
  {
    title: "Weather App",
    link: "https://github.com/JayPeura/weather",
    desc: "Made this simple Weather App in 2021 to get into using APIs",
    img: "images/wapi.png",
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/JayPeura/jaypeura.github.io",
    desc: "Basically; this very website.",
    img: "images/Work2.jpg",
  },
];

const redirect = (link) => {
  window.open(link);
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .q-card {
    min-width: 300px;
    margin: 13px;
    border-radius: 15px;
  }
}

.container.mobile {
  display: flex;
  flex-direction: column;
  .q-card {
    width: 320px;
    margin: 13px;
    border-radius: 15px;
  }
}
</style>
