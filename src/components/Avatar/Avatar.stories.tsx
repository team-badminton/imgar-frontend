import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'components/Avatar',
  component: Avatar,
  argTypes: {
    to: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    username: 'tohero',
    infoRows: 1,
    to: '#',
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />;

export const SizeSmall = Template.bind({});

SizeSmall.args = {
  size: 'small',
  metaInfos: {
    time: 1000,
    platform: 'Android',
  },
};

export const SizeMedium = Template.bind({});

SizeMedium.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Iphone',
  },
};

export const PlatFormIphone = Template.bind({});

PlatFormIphone.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Iphone',
  },
};

export const PlatFormWeb = Template.bind({});

PlatFormWeb.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Web',
  },
};

export const PlatFormAndroid = Template.bind({});

PlatFormAndroid.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Android',
  },
};

export const infoRows2 = Template.bind({});

infoRows2.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Android',
  },
  infoRows: 2,
};

export const scaleUp = Template.bind({});

scaleUp.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: 1000,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};
