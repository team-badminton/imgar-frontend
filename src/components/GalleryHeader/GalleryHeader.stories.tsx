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
        component: `**GalleryHeader** 컴포넌트는 Gallery 페이지에서 보여주고 있는 post의 Header를 담당하는 컴포넌트입니다.`,
      },
    },
  },
} as ComponentMeta<typeof GalleryHeader>;

const Template: ComponentStory<typeof GalleryHeader> = args => <GalleryHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  userName: 'fJTUK',
  extraInfos: ['15,252 Views', '3h', 'via Android'],
};
