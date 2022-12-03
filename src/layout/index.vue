<template>
  <q-layout view="hHh 1pR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Force Music</q-toolbar-title>
        <q-space />
        <q-avatar color="teal" text-color="white">
          nickname
          <q-menu fit>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup @click="logOut">
                <q-item-section>LogOut</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="menu-active text-white"
          v-for="item in menuRoutes"
          :key="item.meta.title"
          :active="item.name === route.name"
          :to="item.path"
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>{{ item.meta.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { menuRoutes } from "@/router";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
const logOut = () => {};
</script>

<style scoped lang="sass">
.menu-active
  color: white !important
  background: #F2C037
</style>
