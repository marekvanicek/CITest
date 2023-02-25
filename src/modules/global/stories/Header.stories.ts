
import Header from '../components/HeaderLayout.vue'

import type { Meta } from '@storybook/vue3';

export default {
    /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
    title: 'Header',
    component: Header,
} as Meta<typeof Header>;

export const LoggedIn = () => ({
    components: { Header },
    template: '<Header :loggedIn="true"/>',
});

export const LoggedOut = () => ({
    components: { Header },
    template: '<Header :loggedIn="false"/>',
});
