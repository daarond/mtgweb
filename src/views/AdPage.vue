<template>
  <v-container class="ad">
    <h1>This is a 5 second ad</h1>
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
