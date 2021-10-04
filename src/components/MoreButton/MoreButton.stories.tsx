import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Present } from '@/assets/Icon/present-box.svg';

// utils
import { pxToRem } from '@/util/styleUtils';

// components
import { MoreButton, Button } from '@/components';

const colorOptions = [
  'primaryColor',
  'secondaryColor',
  'backgroundGray',
  'backgroundNavy',
  'darkGray',
  'lightGray',
  'blue',
  'white',
  'black',
  'emeraldGreen',
  'lightBlue',
];

export default {
  title: 'components/MoreButton',
  component: MoreButton,
  parameters: {
    docs: {
      description: {
        component: `**MoreButton** 컴포넌트는 ... 모양의 버튼입니다. gallery page에서 dropdown 메뉴를 활성화 시키기 위해 사용됩니다.`,
      },
    },
  },
  args: {
    size: 'small',
    img: Button,
  },
} as ComponentMeta<typeof MoreButton>;

const Template: ComponentStory<typeof MoreButton> = args => <MoreButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};

Default.parameters = { pseudo: { hover: true } };
