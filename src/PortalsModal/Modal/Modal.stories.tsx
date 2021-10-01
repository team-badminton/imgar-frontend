import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';
import { Picture } from '../../components';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `Modal 컴포넌트 입니다. 본 컴포넌트는 외부에서 사용되지 않습니다. Modal은 PortalsModal 내부에서만 사용되기 때문에 PortalsModal을 interface로 사용하세요.`,
      },
    },
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <Picture imageId="AD3MbBi"></Picture>,
};
