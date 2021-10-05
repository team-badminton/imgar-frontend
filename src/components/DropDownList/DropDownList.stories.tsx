import React, { ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDownList from './DropDownList';

export default {
  title: 'Components/DropDownList',
  component: DropDownList,
  parameters: {
    docs: {
      description: {
        component: ` DropDownList 컴포넌트 입니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof DropDownList>;

const Template: ComponentStory<typeof DropDownList> = args => <DropDownList {...args} />;

export const useTypeIsSelectBox: ComponentStory<typeof DropDownList> = Template.bind({});
useTypeIsSelectBox.args = {
  children: ['listItem 1', 'listItem 2', 'listItem 3'].map((item, index) => <span key={index}>{item}</span>),
  themeType: 'dark',
  handlerOption: {
    useType: 'selectBox',
    handleDropDownList: ($selectedLi: Element, $selectedChild: ReactElement) => e => {
      console.log($selectedLi, $selectedChild);
    },
  },
};

export const useTypeIsItemBox: ComponentStory<typeof DropDownList> = Template.bind({});
useTypeIsItemBox.args = {
  children: ['listItem 1', 'listItem 2', 'listItem 3'].map((item, index) => <span key={index}>{item}</span>),
  themeType: 'dark',
  handlerOption: { useType: 'itemBox', handleDropDownItems: [], dropdownHeader: 'dropdownHeader' },
};

export const themeTypeDark: ComponentStory<typeof DropDownList> = Template.bind({});
themeTypeDark.args = {
  ...useTypeIsSelectBox.args,
};

export const themeTypeLight: ComponentStory<typeof DropDownList> = Template.bind({});
themeTypeLight.args = {
  ...useTypeIsSelectBox.args,
  themeType: 'light',
};
