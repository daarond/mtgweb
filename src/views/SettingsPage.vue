<template>
  <v-container class="settings">

    <v-row>
      <v-col cols="2">
        <v-btn
          icon
          to="/"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h1>Settings</h1>
      </v-col>
    </v-row>

    <div style="margin-left: 60px; margin-top: 50px;">
      <v-switch
        label="Sound"
        color="blue lighten-2"
      ></v-switch>

      <v-switch
        label="Music"
        color="blue lighten-2"
      ></v-switch>
    </div>

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({});
</script>
