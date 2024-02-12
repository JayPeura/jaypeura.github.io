<template>
  <q-page class="column items-center" padding>
    <div class="container">
      <div class="text-h6">Feel free to get in touch!</div>
      <q-list bordered>
        <q-item>
          <q-item-section avatar>
            <q-icon color="black" name="alternate_email" />
          </q-item-section>
          <q-item-section>jay.peura@hotmail.com</q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon color="black" name="fa-brands fa-linkedin" />
          </q-item-section>
          <q-item-section
            ><a
              href="https://www.linkedin.com/in/jay-peura-0ba446185/"
              class="link"
              target="_blank"
              >LinkedIn</a
            ></q-item-section
          >
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  width: 300px;
}
.link {
  color: black;
}
</style>
