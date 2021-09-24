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

export const Small = Template.bind({});

Small.args = {
  userName: 'tohero',
  size: 'small',
  imageId: 'eZqkgWk',
  extraInfos: ['', '3h', 'via Android'],
};

export const Medium = Template.bind({});

Medium.args = {
  userName: 'tohero',
  size: 'medium',
  imageId: 'eZqkgWk',
  extraInfos: ['15,252 Views', '3h', 'via Android'],
};
