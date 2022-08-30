<template>
  <v-container class="home">
    <div style="float: right;">
      <v-btn
        icon
        to="Settings"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>

    <div style="clear: both;">
      <v-img
        :src="mtgLogo"
        class="mx-auto logo"
        alt="MTG logo"
        contain
        width="300"
        height="300"
      />
    </div>


    <v-col
      class="d-flex"
      cols="12"
    >
      <div style="margin-left: 30%;">
        <v-btn
          color="orange"
          dark
          outlined
          to="Help"
        >
          How To Play
        </v-btn>
      </div>
    </v-col>


    <v-row>
      <v-col
        class="hidden-sm-and-down"
        cols="3"
      ></v-col>
      <v-col
        class="hidden-sm-and-up"
        cols="2"
      ></v-col>
      <v-col
        class="d-flex"
        cols="8"
      >
        <v-select
          id="tile_selected"
          :items="tile_options"
          v-model="tile_selected"
          label="Tile Count"
          dense
          outlined
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="d-flex"
        cols="12"
      >
      <div style="margin-left: 30%;">
        <v-btn
          color="success"
          x-large
          dark
          to="Main"
        >
          Play Game
        </v-btn>
      </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="8">
        <v-btn
          color="blue"
          dark
          to="Ad"
        >
          Watch Ad for 250 Coins
        </v-btn>
      </v-col>
      <v-col
        class="d-flex"
        cols="2"
      >
        <v-btn
          color="pink"
          dark
          to="Store"
        >
          Store
        </v-btn>
      </v-col>
    </v-row>




    <teleport to="head">
      <meta
        name="keyword"
        content="template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"
      />
      <meta name="description" content="Vite Vue2 TypeScript Demo" />
      <component :is="'script'" type="application/ld+json">
        {{ jsonLd }}
      </component>
    </teleport>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch, type Ref, type SetupContext } from 'vue';
// import { useStore } from '@logue/vue2-helpers/vuex';
import { useRoute } from 'vue-router/composables';

import mtgLogo from '@/assets/mind_the_gap.png';

/** Home Component */
export default defineComponent({
  /** Components */
  components: {

  },

  data: () => ({
    tile_options: [ { text:"8: 2 x 4", value: 8 }, { text:"10: 2 x 5", value:10 } ],
    tile_selected: 8,
  }),

  /** Props */
  props: {
    prop: { type: String, default: 'prop' },
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    /** Route */
    const route = useRoute();
    /** Vuex */
    // const store = useStore();

    const data: Ref<string | undefined> = ref();

    const jsonLd: Ref<string> = ref(
      JSON.stringify(
        {
          '@schema': 'https://json.schemastore.org/jsonld.json',
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: 'Vite Vue2 TypeScript Startar',
          url: 'https://github.com/logue/vite-vue2-vuetify-ts-starter',
          description: 'Vite Vue2 TypeScript Demo Page',
        },
        null,
        2
      )
    );

    /* *
     * Computed
     * /
    const computedValue: Ref<string> = computed({
      get: () => store.getters.computedValue,
      set: v => store.dispatch('setComputedValue', v)
    }
     */

    // Watch
    watch(
      () => route?.name,
      name => console.log('route is changed:', name)
    );

    return {
      data,
      jsonLd,
      mtgLogo,
    };
  }
});
</script>
