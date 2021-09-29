import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabNavigation from './TabNavigation';

export default {
  title: 'Components/TabNavigation',
  component: TabNavigation,
  argTypes: {
    posts: {
      name: 'PostResult',
      description: `
    탭 네비게이션 컴포넌트 입니다.
    `,
      option: {},
    },
  },
  args: {},
  parameters: {
    docs: {
      description: {
        component: `검색창을 통해 입력받은 쿼리에 대한 추천검색어를 표시해 줍니다.`,
      },
    },
  },
} as ComponentMeta<typeof TabNavigation>;

const Template: ComponentStory<typeof TabNavigation> = args => <TabNavigation {...args} />;

export const AllResult = Template.bind({});
export const PostResult = Template.bind({});
PostResult.args = {
  users: [],
  tags: [],
};
export const TagResult = Template.bind({});
TagResult.args = {
  posts: [],
  users: [],
};
export const UserResult = Template.bind({});
UserResult.args = {
  posts: [],
  tags: [],
};
