<template>
    <v-app-bar color="background" density="compact" data-cy="navbar">
      <v-app-bar-nav-icon data-cy="drawer-btn" />
      <v-app-bar-title class="pl-0">
        <div class="d-flex align-center text-overline">
          <v-avatar data-cy="home-img" rounded="0" class="mr-3"
                    image="/JACCS-logo.png" />
          <span data-cy="home-text">JACCS WebUI</span>
        </div>
      </v-app-bar-title>
      <v-spacer />
      <v-dialog v-model="dialog" data-cy="settings-dialog" persistent
                max-width="600" theme="dark">
        <template #activator="{ props }">
          <v-btn v-bind="props" class="pa-0 mr-1" data-cy="settings-btn"
                 variant="text" size="lg">
            <v-tooltip activator="parent" location="bottom">
              Settings
            </v-tooltip>
            <v-icon icon="mdi-cog" />
          </v-btn>
        </template>
  
        <v-card class="pt-12 px-12">
          <v-row class="mb-4 d-flex flex-column">
            <div class="text-caption">
              Rows
            </div>
            <v-slider v-model="numRows" data-cy="rows-sliders" :min="1"
                      :max="4" :step="1" :ticks="['1', '2', '3', '4']"
                      show-ticks="always" tick-size="4" />
          </v-row>
          <v-row class="mb-4 d-flex flex-column">
            <div class="text-caption">
              Columns
            </div>
            <v-slider v-model="numCols" data-cy="columns-sliders" :min="1"
                      :max="4" :step="1" :ticks="['1', '2', '3', '4']"
                      show-ticks="always" tick-size="4" />
          </v-row>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="primary" data-cy="settings-dialog-cancel-btn" @click="dialog = false">
              Cancel
            </v-btn>
            <v-btn color="yellow-darken-2" data-cy="settings-dialog-save-btn" @click="handleSaveConfig()">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-menu open-on-hover data-cy="user-menu">
        <template #activator="{ props }">
          <v-btn color="primary" data-cy="displayname-btn" variant="text"
                 v-bind="props">
            Test User
            <v-icon class="ml-2" icon="mdi-chevron-down" />
          </v-btn>
        </template>
        <v-list>
          <v-list-item class="d-inline-flex align-center">
            <v-list-item-title class="nav-link text-overline" data-cy="operator-view-btn"
                               @click="goToHomePage()">
              <v-icon icon="mdi-laptop" class="mr-2" />
              Operator View
            </v-list-item-title>
            <v-list-item-title class="nav-link text-overline" data-cy="admin-view-btn"
                               @click="goToAdminPage()">
              <v-icon icon="mdi-account-group" class="mr-2" />
              User Configuration
            </v-list-item-title>
            <v-list-item-title class="nav-link text-overline" data-cy="vms-view-btn">
              <v-icon icon="mdi-cog" class="mr-2" />
              Vms Configuration
            </v-list-item-title>
            <v-list-item-title class="nav-link text-overline" data-cy="logoff-btn" @click="handleLogOff()">
              <v-icon icon="mdi-logout" class="mr-2" />
              Log Off
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const dialog = ref(false);
  const numRows = ref(2);
  const numCols = ref(2);
  
  function goToAdminPage() {
    console.log('go to admin page');
  }
  
  function goToHomePage() {
    console.log('go to home page');
  }
  
  function handleLogOff() {
    console.log('handle log off');
  }
  
  function handleSaveConfig():void {
    console.log('handle save config');
  }
  </script>
  
  <style scoped>
  .nav-link {
    cursor: pointer;
    margin: 0.25rem 0 0.25rem 0;
  }
  .nav-link:hover {
    color: #ccc;
  }
  </style>
  