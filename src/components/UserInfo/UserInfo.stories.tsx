import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import UserInfo from './UserInfo';

export default {
  title: 'Components/UserInfo',
  component: UserInfo,
  args: {
    username: 'kimjeongwon',
    points: 100,
    notoriety: 'Neutral',
  },
  parameters: {
    docs: {
      description: {
        component: `프로필 페이지에서 사용자 정보를 보여주는 컴포넌트 입니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof UserInfo>;

const Template: ComponentStory<typeof UserInfo> = args => <UserInfo {...args} />;

export const Default = Template.bind({});
