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
        검색어를 입력하면 API통신을 통해
        `,
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => <Search {...args} />;

export const Idle = Template.bind({});
