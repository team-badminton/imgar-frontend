import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TabNavigation from './TabNavigation';
import { MemoryRouter } from 'react-router';

export default {
  title: 'Components/TabNavigation',
  component: TabNavigation,
  args: {
    tabs: [
      { label: 'Tab 1', path: 'tab1' },
      { label: 'Tab 2', path: 'tab2' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component: `탭 네비게이션 컴포넌트 입니다.`,
      },
    },
  },
  decorators: [
    Stroy => (
      <MemoryRouter initialEntries={['/', '/user/:username']} initialIndex={1}>
        <Stroy />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof TabNavigation>;

const Template: ComponentStory<typeof TabNavigation> = args => <TabNavigation {...args} />;

export const Default = Template.bind({});
