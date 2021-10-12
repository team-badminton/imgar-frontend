import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Picture from './Picture';

export default {
  title: 'Components/Picture',
  component: Picture,
  parameters: {
    docs: {
      description: {
        component: `**이미지** 컴포넌트는 src 또는 id(hash)를 입력받아 이미지 태그를 생성합니다.
        id를 입력받은 경우 webp 확장자를 우선적으로 요청하는 컴포넌트 입니다.
        단, src가 입력 되었다면 id를 무시하고 src를 attribute로 가지는 img 태그를 최우선으로 반환합니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = args => <Picture {...args} />;

export const IdImage = Template.bind({});
IdImage.args = {
  imageId: 'AD3MbBi',
};

export const SrcImage = Template.bind({});
SrcImage.args = {
  src: 'https://i.imgur.com/AD3MbBi.jpg?&fidelity=grand',
  imageWidth: 500,
  alt: '',
};

export const CircleImage = Template.bind({});
CircleImage.args = {
  isCircle: true,
  imageWidth: '100px',
  src: 'https://imgur.com/user/yeongjong/avatar',
};

export const FocusableImage = Template.bind({});
FocusableImage.args = {
  imageId: 'AD3MbBi',
  tabIndex: 0,
};
