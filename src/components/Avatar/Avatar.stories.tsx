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
    time: 1632796682 - 3600 * 24,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};

const TIME_UNIT = {
  m: 60000,
  h: 3600000,
  d: 3600000 * 24,
  M: 3600000 * 24 * 30,
};

export const uploadedTimeAMinuteAgo = Template.bind({});

uploadedTimeAMinuteAgo.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: (+new Date() - TIME_UNIT.m) / 1000,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};

export const uploadedTimeOverAnHour = Template.bind({});

uploadedTimeOverAnHour.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: (+new Date() - TIME_UNIT.h) / 1000,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};

export const uploadedTimeOverADay = Template.bind({});

uploadedTimeOverADay.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: (+new Date() - TIME_UNIT.d) / 1000,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};

export const uploadedTimeOverAMonth = Template.bind({});

uploadedTimeOverAMonth.args = {
  type: 'medium',
  metaInfos: {
    views: 1000,
    time: (+new Date() - TIME_UNIT.M) / 1000,
    platform: 'Android',
  },
  infoRows: 2,
  transScaleImage: 1.1,
};
