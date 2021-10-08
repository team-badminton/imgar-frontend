import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileAbout from './ProfileAbout';
export default {
  title: 'Pages/Profile/ProfileAbout',
  component: ProfileAbout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `ProfileAbout 페이지 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof ProfileAbout>;

const Template: ComponentStory<typeof ProfileAbout> = args => <ProfileAbout {...args} />;

export const Default = Template.bind({});
