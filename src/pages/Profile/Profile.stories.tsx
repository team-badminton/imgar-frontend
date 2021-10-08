import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Profile from './Profile';
import { MemoryRouter, Route, Redirect } from 'react-router-dom';
import useResize from '@/hooks/useResize';

export default {
  title: 'Pages/Profile',
  component: Profile,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Profile 페이지 입니다.`,
      },
    },
  },
  decorators: [
    Story => {
      return <Route path="/:username" component={Story} />;
    },
  ],
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => <Profile {...args} />;

export const Posts: ComponentStory<typeof Profile> = Template.bind({});
Posts.decorators = [
  S => {
    useResize();
    return (
      <MemoryRouter initialEntries={['//posts']} initialIndex={1}>
        <S />
      </MemoryRouter>
    );
  },
];
export const Favorites: ComponentStory<typeof Profile> = Template.bind({});
Favorites.decorators = [
  S => {
    useResize();
    return (
      <MemoryRouter initialEntries={['//favorites']} initialIndex={0}>
        <S />
      </MemoryRouter>
    );
  },
];
export const Comments: ComponentStory<typeof Profile> = Template.bind({});
Comments.decorators = [
  S => {
    useResize();
    return (
      <MemoryRouter initialEntries={['//comments']} initialIndex={0}>
        <S />
      </MemoryRouter>
    );
  },
];
export const About: ComponentStory<typeof Profile> = Template.bind({});
About.decorators = [
  S => {
    useResize();
    return (
      <MemoryRouter initialEntries={['//about']} initialIndex={0}>
        <S />
      </MemoryRouter>
    );
  },
];
