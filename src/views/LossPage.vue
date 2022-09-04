<template>
  <v-container class="loss"
               :style="{ backgroundImage: 'url(' + require('@/assets/down_stairs.jpg') + ')' }"
    >

    <v-row style="height: 300px;"></v-row>

    <v-row>
      <v-btn
        color="yellow"
        fab
        x-large
        to="Main"
        style="margin-left: 40%;"
      >
        <v-icon>mdi-restart</v-icon>
      </v-btn>
    </v-row>

    <v-row style="height: 80px;"></v-row>

    <v-row>
      <v-btn
        color="red"
        fab
        x-large
        dark
        to="/"
        style="margin-left: 40%;"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </v-row>

    <v-row style="height: 500px;"></v-row>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({});
</script>
