<template>
  <v-container class="win">
    <h1>You Won!</h1>

    <v-row style="height: 80px;"></v-row>

    <v-row>
      <v-btn
        color="Green"
        x-large
        to="Main"
        style="margin-left: 40%;"
      >
        Next Level
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

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({



});
</script>
