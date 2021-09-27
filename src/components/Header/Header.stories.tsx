import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `모든 페이지 상단에 고정되어있는 헤더 컴포넌트 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
