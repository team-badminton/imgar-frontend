import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  args: {
    icon: false,
    as: 'div',
  },
  parameters: {
    docs: {
      description: {
        component: `로고 이미지 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const Default = Template.bind({});
