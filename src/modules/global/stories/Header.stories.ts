import Header from '@global/components/HeaderLayout.vue'

import type { Meta } from '@storybook/vue3';

export default {
    title: 'Layout/Header',
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