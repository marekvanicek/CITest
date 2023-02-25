import PostContent from "../components/PostContent.vue";

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'PostContent',
  component: PostContent,
} as Meta<typeof PostContent>;

export const main: StoryFn<typeof PostContent> = () => ({
    components: { PostContent },
    template: '<PostContent author="Karel" posted="10.03.2000"><template #title>Title</template><template #content>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque adipisci perferendis sequi tenetur nam ad, quis ut, quo sit modi iusto dolore veniam at enim. Ipsa, repudiandae illo? Numquam.         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat atque adipisci perferendis sequi tenetur nam ad, quis ut, quo sit modi iusto dolore veniam at enim. Ipsa, repudiandae illo? Numquam.</template></PostContent>',
  });