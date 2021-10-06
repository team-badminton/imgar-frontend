import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PostComment from './PostComment';

export default {
  title: 'Components/PostComment',
  component: PostComment,
  parameters: {
    docs: {
      description: {
        component: `커맨트 컴포넌트 입니다.`,
      },
    },
  },
} as ComponentMeta<typeof PostComment>;

const Template: ComponentStory<typeof PostComment> = args => <PostComment {...args} />;

export const noChildCommentsExist = Template.bind({});
noChildCommentsExist.args = {
  author: 'Francis31415',
  dateTime: 1100012300,
  comment: 'Test Comment',
  downCount: 100,
  upCount: 1,
  childrenComments: [],
};

export const childCommentsExist = Template.bind({});
childCommentsExist.args = {
  id: '2144157441',
  author: 'Francis31415',
  dateTime: 1100012300,
  comment: 'Test Comment',
  downCount: 100,
  upCount: 1,
  childrenComments: [
    {
      id: '2144157442',
      author: 'Francis31415',
      dateTime: 1100012300,
      comment: 'Test Comment',
      downCount: 100,
      upCount: 1,
      childrenComments: [],
    },
    {
      id: '2144157443',
      author: 'Francis31415',
      dateTime: 1100012300,
      comment: 'Test Comment',
      downCount: 100,
      upCount: 1,
      childrenComments: [
        {
          id: '2144157444',
          author: 'Francis31415',
          dateTime: 1100012300,
          comment: 'Test Comment',
          downCount: 100,
          upCount: 1,
          childrenComments: [],
        },
      ],
    },
  ],
};
