import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  args: {
    id: 'Basic',
    src: 'https://i.imgur.com/OF5UHcx_d.webp?maxwidth=520&fidelity=high',
  },
  parameters: {
    docs: {
      description: {
        component: '**이미지** 컴포넌트는 확장자 webp를 우선적으로 요청하는 컴포넌트 입니다.',
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const Basic = Template.bind({});

export const CircleImage = Template.bind({});
CircleImage.args = {
  isCircle: true,
  width: '100px',
  src: 'https://imgur.com/user/yeongjong/avatar',
};
