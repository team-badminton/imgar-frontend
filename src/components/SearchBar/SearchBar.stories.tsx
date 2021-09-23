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
        component: `검색창 컴포넌트는 입력값을 통해 실시간으로 추천 검색어를 보여주고
        해당 검색어를 클릭하여 원하는 화면을 볼 수 있도록 해줍니다.
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
