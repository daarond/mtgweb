<template>
  <v-container class="store">

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
        <h1>Store</h1>
      </v-col>
    </v-row>

    <div style="margin-left: 20px; margin-top:50px;">
      <v-row>
        <v-btn color="purple" dark style="width: 160px;">Ad-Free ($1.99)</v-btn>
      </v-row>

      <v-row style="margin-bottom: 30px;"></v-row>

      <v-row>
        <v-btn color="yellow" style="width: 200px;">500 Coins ($0.99)</v-btn>
      </v-row>

      <v-row style="margin-bottom: 20px;"></v-row>

      <v-row>
        <v-btn color="yellow" style="width: 200px;">2500 Coins ($1.99)</v-btn>
      </v-row>

      <v-row style="margin-bottom: 20px;"></v-row>

      <v-row>
        <v-btn color="yellow" style="width: 200px;">5000 Coins ($2.99)</v-btn>
      </v-row>
    </div>


  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({});
</script>
