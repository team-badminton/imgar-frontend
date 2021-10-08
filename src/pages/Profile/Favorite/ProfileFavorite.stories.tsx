import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProfileFavorite from './ProfileFavorite';

export default {
  title: 'Pages/Profile/ProfileFavorite',
  component: ProfileFavorite,
  parameters: {
    docs: {
      description: {
        component: `ProfileFavorite 페이지 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof ProfileFavorite>;

const Template: ComponentStory<typeof ProfileFavorite> = args => <ProfileFavorite {...args} />;

export const Default = Template.bind({});
