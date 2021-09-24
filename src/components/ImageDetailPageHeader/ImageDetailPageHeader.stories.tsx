import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// utils
import { pxToRem } from '@/util/styleUtils';

// components
import ImageDetailPageHeader from './ImageDetailPageHeader';

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
  title: 'components/ImageDetailPageHeader',
  component: ImageDetailPageHeader,
  parameters: {
    docs: {
      description: {
        component: `**이미지 디테일 헤더** 컴포넌트는 ...`,
      },
    },
  },
} as ComponentMeta<typeof ImageDetailPageHeader>;

const Template: ComponentStory<typeof ImageDetailPageHeader> = args => <ImageDetailPageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
  userName: 'fJTUK',
  extraInfos: ['15,252 Views', '3h', 'via Android'],
};
