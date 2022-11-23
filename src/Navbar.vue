<template>
<v-app-bar>
  <v-container class="d-flex align-center py-0">
    <v-app-bar-title class="pl-0">
      <div class="d-flex align-center">
        <v-avatar
          rounded="0"
          class="mr-3"
          image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
        />

        Vuetify 3
      </div>
    </v-app-bar-title>
  </v-container>
</v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  testProp: string
}>();

console.log('in component: ', props.testProp);

const testFoo2 = ref('Test foo 2');

function changeFoo(val: string):void {
  testFoo2.value = val;
}
</script>