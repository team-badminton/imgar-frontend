import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MasonryGalleryHeader } from '@/components/index';
import useResize from '@/hooks/useResize';

export default {
  title: 'Components/MasonryGalleryHeader',
  component: MasonryGalleryHeader,
  parameters: {
    docs: {
      description: {
        component: ` MasonryGalleryHeader 컴포넌트입니다.\n
MasonryGalleryFields 컴포넌트와 MasonryGalleryOptions 컴포넌트로 구성됩니다.
`,
      },
    },
  },
} as ComponentMeta<typeof MasonryGalleryHeader>;

const Template: ComponentStory<typeof MasonryGalleryHeader> = args => <MasonryGalleryHeader {...args} />;

export const Default: ComponentStory<typeof MasonryGalleryHeader> = Template.bind({});
Default.args = {};
Default.decorators = [
  Story => {
    useResize();
    return <Story />;
  },
];
