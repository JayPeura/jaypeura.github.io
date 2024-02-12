<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="column items-center">
        <q-toolbar-title>
          <q-icon name="star_outline" /> Jay Peura
          <q-icon name="star_outline" />
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="justify-center">
        <q-tabs noCaps>
          <q-route-tab icon="home" label="Home" to="/" />
          <q-route-tab icon="person" label="About" to="/about" />
          <q-route-tab icon="phone" label="Contact" to="/contact" />
          <q-route-tab icon="folder" label="Projects" to="/projects" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-header {
  background: linear-gradient(rgb(85, 85, 85), rgb(0, 0, 0) 70%);
}

.q-toolbar__title {
  font-size: 30px;
}
</style>
