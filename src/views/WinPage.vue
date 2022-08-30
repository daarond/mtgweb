<template>
  <v-container class="win">
    <h1>You Won!</h1>

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

  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/** About */
export default defineComponent({

  mounted() {
    setTimeout(()=>{ this.$router.push('/main') }, 5000);
  }

});
</script>
