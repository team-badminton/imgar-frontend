import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Search from './Search';

export default {
  title: 'Components/Search',
  component: Search,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `
        검색어를 입력하면 API통신을 통해 자동완성을 보여줍니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;
export const Default = Template.bind({});
