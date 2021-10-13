import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// components
import GalleryHeader from './GalleryHeader';

export default {
  title: 'components/GalleryHeader',
  component: GalleryHeader,
  parameters: {
    docs: {
      description: {
        component: `**GalleryHeader** 컴포넌트는 Gallery 페이지의 최상단에 배체되는 Header를 담당하는 컴포넌트입니다.
        로고와 서치바 및 post의 일부 정보(이하 Gallery Title)가 렌더링 되며
        PostHeader의 자식인 Title의 width와 left(위치)에 정확히 일치하는 Gallery Title이 중앙에 렌더링 됩니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof GalleryHeader>;

const Template: ComponentStory<typeof GalleryHeader> = args => <GalleryHeader {...args} />;

export const Default: ComponentStory<typeof GalleryHeader> = Template.bind({});
Default.args = {
  title: 'Cute Cat',
  username: 'tohero',
  width: 300,
  positionX: 100,
};

Default.decorators = [
  Story => (
    <div style={{ height: '150vh' }}>
      <Story />
    </div>
  ),
];
