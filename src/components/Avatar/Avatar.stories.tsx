import React from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

import Avatar from './Avatar';

const meta: Meta = {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...?node-id=...',
    },
  },
};

export default meta;

const Template: Story<typeof Avatar> = (args) => <Avatar {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
