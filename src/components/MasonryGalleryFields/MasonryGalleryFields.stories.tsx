import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MasonryGalleryFields } from '@/components/index';
import useResize from '@/hooks/useResize';

export default {
  title: 'Components/MasonryGalleryFields',
  component: MasonryGalleryFields,
  parameters: {
    docs: {
      description: {
        component: ` MasonryGalleryFields 컴포넌트입니다.\n
두 개의 DropDownList 컴포넌트가 유기적으로 연결되어 있습니다.

## Category 선택
왼쪽의 DropDownList 컴포넌트 입니다.
MOST VIRAL, USER SUBMITTED, HIGHEST SCORING 으로 구성되어 있습니다.

## 정렬 방식 혹은 시간 범위 선택
오른쪽의 DropDownList 컴포넌트 입니다.
Category에 따라 다른 리스트를 보여줍니다.

### MOST VIRAL 일 때
  - NEWEST, POPLULAR, BEST, RANDOM

### USER SUBMITTED 일 때
  - POPULAR, RISING, NEWEST

### HIGHEST SCORING 일 때
  - DAY, WEEK, MONTH, YEAR, ALL
`,
      },
    },
  },
} as ComponentMeta<typeof MasonryGalleryFields>;

const Template: ComponentStory<typeof MasonryGalleryFields> = args => <MasonryGalleryFields {...args} />;

export const Default: ComponentStory<typeof MasonryGalleryFields> = Template.bind({});
Default.args = {};
Default.decorators = [
  Story => {
    useResize();
    return <Story />;
  },
];
