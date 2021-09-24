import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    placeholder: 'Images, #tags, @users oh my!',
  },
  parameters: {
    docs: {
      description: {
        component: `검색어를 입력받는 컴포넌트 입니다.
        `,
      },
    },
    backgrounds: {
      default: 'dark',
    },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => <SearchBar {...args} />;

export const DefaultInput = Template.bind({});
