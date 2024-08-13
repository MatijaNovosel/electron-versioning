<template>
  <q-layout view="hHh LpR fFf">
    <q-page-container class="screen-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
//
</script>

<style scoped lang="scss">
.screen-container {
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  position: relative;
}
</style>
