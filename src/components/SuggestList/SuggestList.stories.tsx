import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SuggestList from './SuggestList';

export default {
  title: 'Components/SuggestList',
  component: SuggestList,
  argTypes: {
    posts: {
      name: 'PostResult',
      description: `
    입력받은 검색어에 대한 자동완성 결과를 보여줍니다.
    props를 통해 데이터를 받아서 화면에 렌더링 합니다.
    `,
      option: {},
    },
  },
  args: {
    posts: [
      {
        id: 'oxENdTZ',
        title: 'cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat cat',
      },
      {
        id: '3C4GcKM',
        title: 'Cat cat cat cat cat cat cat cat cat cat cat',
      },
      {
        id: '84nf8',
        title: 'Cat cat cat cat cat cat cat cat cat',
      },
    ],
    users: [
      {
        id: '541632',
        name: 'catscatsyeahcats',
      },
      {
        id: '123157451',
        name: 'catnipsINcatnipsOUT',
      },
      {
        id: '720885',
        name: 'catshavesharppartsbutilovethem',
      },
    ],
    tags: [
      {
        name: 'caturday',
        displayName: 'Caturday',
        backgroundImageId: 'xeEIpAn',
      },
      {
        name: 'cat_tax',
        displayName: 'cat tax',
        backgroundImageId: 'f8B0kEw',
      },
      {
        name: 'funny_cats',
        displayName: 'funny cats',
        backgroundImageId: 'iN4Gb0k',
      },
    ],
    keyword: 'cat',
  },
  parameters: {
    docs: {
      description: {
        component: `검색창을 통해 입력받은 쿼리에 대한 추천검색어를 표시해 줍니다.`,
      },
    },
  },
} as ComponentMeta<typeof SuggestList>;

const Template: ComponentStory<typeof SuggestList> = args => <SuggestList {...args} />;

export const AllResult = Template.bind({});
export const PostResult = Template.bind({});
PostResult.args = {
  users: [],
  tags: [],
};
export const TagResult = Template.bind({});
TagResult.args = {
  posts: [],
  users: [],
};
export const UserResult = Template.bind({});
UserResult.args = {
  posts: [],
  tags: [],
};
