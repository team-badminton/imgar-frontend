import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainContainer from './MainContainer';

export default {
  title: 'Components/MainContainer',
  component: MainContainer,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `모든 페이지 상단에 고정되어있는 헤더 컴포넌트 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof MainContainer>;

const Template: ComponentStory<typeof MainContainer> = args => <MainContainer {...args} />;

export const Default = Template.bind({});
