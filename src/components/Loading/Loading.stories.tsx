import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Loading from './Loading';

export default {
  title: 'Components/Loading',
  component: Loading,
  parameters: {
    docs: {
      description: {
        component: `로딩상태를 보여주는 컴포넌트 입니다. 상황에 따라 모달로 사용하거나 컨테이너의 중앙에 표시할 수 있습니다.`,
      },
    },
  },
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />;

export const InContainer: ComponentStory<typeof Loading> = Template.bind({});

export const Modal: ComponentStory<typeof Loading> = Template.bind({});
Modal.args = {
  modal: true,
};
