/** Vue Router Configure */
import { nextTick } from 'vue';
import type { NavigationGuardNext, Route } from 'vue-router';
import type { Position, PositionResult } from 'vue-router/types/router';
import {
  createRouter,
  type Router,
  type RouteRecordRaw,
} from '@logue/vue2-helpers/vue-router';

import type { VuetifyGoToTarget } from 'vuetify/types/services/goto';
import goTo from 'vuetify/lib/services/goto';
import store from '@/store';

/** Router Config */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/SettingsPage.vue'),
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import('@/views/StorePage.vue'),
  },
  {
    path: '/ad',
    name: 'Ad',
    component: () => import('@/views/AdPage.vue'),
  },
  {
    path: '/pause',
    name: 'Pause',
    component: () => import('@/views/PausePage.vue'),
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('@/views/HelpPage.vue'),
  },
  {
    path: '/win',
    name: 'Win',
    component: () => import('@/views/WinPage.vue'),
  },
  {
    path: '/lose',
    name: 'Lose',
    component: () => import('@/views/LossPage.vue'),
  },
];

const router: Router = createRouter({
  base: import.meta.env.BASE_URL,
  mode: 'history', // abstract, hash, history
  scrollBehavior: async (
    to: Route,
    _from: Route,
    savedPosition: void | Position
  ): Promise<PositionResult> => {
    // https://vuetifyjs.com/features/scrolling/#router3067306e4f7f7528
    let scrollTo: VuetifyGoToTarget = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return { x: 0, y: await goTo(scrollTo) };
  },
  routes,
});

router.beforeEach(
  async (_to: Route, _from: Route, next: NavigationGuardNext<Vue>) => {
    // Show Loading
    store.dispatch('setLoading', true);
    await nextTick();

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  store.dispatch('setLoading', false);
});

export default router;
