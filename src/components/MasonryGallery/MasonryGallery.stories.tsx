import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MasonryGallery from './MasonryGallery';
import useResize from '@/hooks/useResize';

export default {
  title: 'Components/MasonryGallery',
  component: MasonryGallery,
  parameters: {
    docs: {
      description: {
        component: ` MasonryGallery 컴포넌트는 ImageCard 컴포넌트를 Masonry 레이아웃 방식으로 정렬하는 컴포넌트입니다.\n
Masonry 레이아웃은 다양한 크기의 이미지들이 가로 사이즈가 고정된 축 아래로 유동적인 세로 사이즈를 가진 채 나열되는 레이아웃을 말합니다.\n
- 브라우저가 resize될 때마다, 브라우저의 너비에 따라 열의 수가 유동적으로 변합니다.
- 최대 열의 수는 상수로 설정되어 있어 변경가능합니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof MasonryGallery>;

const Template: ComponentStory<typeof MasonryGallery> = args => <MasonryGallery {...args} />;

export const Default: ComponentStory<typeof MasonryGallery> = Template.bind({});
Default.args = {};
Default.decorators = [
  Story => {
    useResize();
    return <Story />;
  },
];
