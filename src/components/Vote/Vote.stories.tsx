import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Vote } from '@/components';

export default {
  title: 'Components/Vote',
  component: Vote,
  parameters: {
    docs: {
      description: {
        component: `**Vote** 컴포넌트는 사용자들이 컨텐츠를 평가하고 포인트 점수(1, -1)를 부여할 수 있는 인터페이스를 제공합니다.`,
      },
    },
  },
  args: {
    type: 'image/jpeg',
  },
} as ComponentMeta<typeof Vote>;

const Template: ComponentStory<typeof Vote> = args => <Vote {...args} />;

export const Row = Template.bind({});
Row.args = {
  count: 10,
  direction: 'row',
  size: 'small',
};

export const Column = Template.bind({});
Column.args = {
  count: 10,
  direction: 'column',
  size: 'small',
};

export const sizeLarge = Template.bind({});
sizeLarge.args = {
  count: 10,
  direction: 'column',
  size: 'large',
};
