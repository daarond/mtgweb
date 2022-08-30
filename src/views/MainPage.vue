<template>
  <v-container class="main" style="height: 90%;">
    <v-row>
      <v-col cols="4">
        <v-btn
          icon
          to="/"
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn
          icon
          to="Store"
        >
          <v-icon>mdi-bitcoin</v-icon>
          23432
        </v-btn>
      </v-col>
      <v-col cols="4">
        <div style="margin-top: 5px;">Level 123</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="5"><span style="font-size: x-large;">2 of 24</span></v-col>
      <v-col cols="5"><span style="font-size: xx-large; color:red; font-weight: bold;">0:39</span></v-col>
    </v-row>

    <v-row style="margin-left: 2px; margin-bottom: 4px;">
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">A</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">B</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">C</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">A</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">D</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">F</v-btn>
    </v-row>
    <v-row style="margin-left: 2px; margin-bottom: 4px;">
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">U</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">E</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">R</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">J</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">G</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">K</v-btn>
    </v-row>
    <v-row style="margin-left: 2px;">
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">B</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">V</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">I</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">A</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">D</v-btn>
      <v-btn dark small style="margin-right: 10px; height: 60px; font-size: x-large;">F</v-btn>
    </v-row>

    <v-row style="margin-top: 30px;"></v-row>
    <v-row style="margin-left: 20px;">
      <v-btn x-small color="blue" dark style="width: 140px; margin-right: 10px;">Peek (500 coins)</v-btn>
      <v-btn x-small color="purple" dark style="width: 140px;">Shine (100 coins)</v-btn>
    </v-row>

    <v-row style="margin-top: 10px;"></v-row>
    <v-row style="margin-left: 10%;">
      <div style="font-size: xxx-large;">SOM_THING</div>
    </v-row>
    <v-row style="margin-left: 10%;">
      <div style="font-size: x-large">ANO<u>T</u>HER</div>
    </v-row>
    <v-row style="margin-left: 10%;">
      <div style="font-size: x-large">WORD<u>Y</u></div>
    </v-row>
    <v-row style="margin-left: 10%;">
      <div style="font-size: x-large">THING<u>A</u>MABOB</div>
    </v-row>

    <v-row>
      <v-btn
        color="red"
        fab
        large
        dark
        bottom
        right
        fixed
        to="Pause"
      >
        <v-icon>mdi-pause</v-icon>
      </v-btn>
    </v-row>


  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({});
</script>

<style>
.letter-btn {
  margin: 2px;
  font-size: xx-large;
}
</style>
