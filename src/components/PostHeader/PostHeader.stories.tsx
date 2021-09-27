import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import PostHeader from './PostHeader';

export default {
  title: 'components/PostHeader',
  component: PostHeader,
  parameters: {
    docs: {
      description: {
        component: `**PostHeader** 컴포넌트는 Gallery 페이지에서 보여주고 있는 post의 Header를 담당하는 컴포넌트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostHeader>;

const Template: ComponentStory<typeof PostHeader> = args => <PostHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  userName: 'fJTUK',
  extraInfos: ['15,252 Views', '3h', 'via Android'],
};
