import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...?node-id=...',
    },
  },
  args: {
    userName: 'tohero',
    src: 'https://i.imgur.com/qYKMM9B_d.png?maxwidth=290&fidelity=grand',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const Comment = Template.bind({});

Comment.args = {
  userName: 'tohero',
  type: 'comment',
};

export const Gallery = Template.bind({});

Gallery.args = {
  userName: 'tohero',
  type: 'gallery',
};

export const Profile = Template.bind({});

Profile.args = {
  userName: 'tohero',
  type: 'profile',
};
