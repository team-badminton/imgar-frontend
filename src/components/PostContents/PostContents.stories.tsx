import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostContents } from '@/components';

export default {
  title: 'Components/PostContents',
  component: PostContents,
  parameters: {
    docs: {
      description: {
        component: `**PostContents** 컴포넌트는 ...`,
      },
    },
  },
} as ComponentMeta<typeof PostContents>;

const Template: ComponentStory<typeof PostContents> = args => <PostContents {...args} />;

export const Default = Template.bind({});
