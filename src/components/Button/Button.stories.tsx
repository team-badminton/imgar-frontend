import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReactComponent as Present } from '@/assets/Button/present-box.svg';

// utils
import { pxToRem } from '@/util/styleUtils';

// components
import Button from './Button';

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
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `**버튼** 컴포넌트는 프로젝트 내에서 공통으로 사용되는 버튼을 위한 컴포넌트 입니다. 
        기본적으로 Link 컴포넌트로 생성되며, to prop 이 누락되었을 시 role="button"이 추가됩니다.`,
      },
    },
  },
  argTypes: {
    hoverBackgroundColor: {
      control: {
        options: colorOptions,
        type: 'select',
      },
    },
    hoverColor: {
      control: {
        options: colorOptions,
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'DEFAULT',
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  text: 'Small',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Medium',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Large',
  size: 'large',
};

export const imgPropAsString = Template.bind({});
imgPropAsString.args = {
  text: 'ImgSrcButton',
  size: 'large',
  img: 'https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg',
  alt: 'ImgSrcButton',
  gap: pxToRem(13),
};

export const imgPropAsSVG = Template.bind({});
imgPropAsSVG.args = {
  text: 'New post',
  size: 'small',
  img: Present,
  alt: 'imgPropAsSVG',
  imageMargin: `${pxToRem(1)} ${pxToRem(5)} 0 0`,
};

export const OnlyImg = Template.bind({});
OnlyImg.args = {
  size: 'Large',
  img: Present,
  alt: 'onlyImg',
  imageMargin: '0',
};

export const HoverProp = Template.bind({});
HoverProp.args = {
  text: 'New post',
  size: 'small',
  img: Present,
  alt: 'hoverProp',
  hoverBackgroundColor: 'secondaryColor',
  hoverColor: 'emeraldGreen',
};

export const AsLink = Template.bind({});
AsLink.args = {
  text: 'Link',
  size: 'small',
  to: '#',
};

export const AsButton = Template.bind({});
AsButton.args = {
  text: 'Link',
  size: 'small',
};
