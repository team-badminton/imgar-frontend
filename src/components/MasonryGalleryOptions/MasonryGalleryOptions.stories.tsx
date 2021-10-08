import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MasonryGalleryOptions } from '@/components/index';

export default {
  title: 'Components/MasonryGalleryOptions',
  component: MasonryGalleryOptions,
  parameters: {
    docs: {
      description: {
        component: `MasonryGalleryOptions 컴포넌트 입니다.\n

## 애니메이션 토글 버튼
MasonryGallery의 이미지 중 비디오의 자동 재생을 껐다 켰다하는 버튼입니다.

## 레이아웃 토글 버튼
MasonryGallery의 레이아웃을 waterfall 혹은 uniform 방식으로 변경하는 버튼입니다.
`,
      },
    },
  },
} as ComponentMeta<typeof MasonryGalleryOptions>;

const Template: ComponentStory<typeof MasonryGalleryOptions> = args => <MasonryGalleryOptions {...args} />;

export const Default: ComponentStory<typeof MasonryGalleryOptions> = Template.bind({});
Default.args = {};
