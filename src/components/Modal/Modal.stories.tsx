import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';
import { Picture } from '..';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `Modal 컴포넌트 입니다. 본 컴포넌트는 hideHandle 함수를 인수로 넘겨주어야 모달을 off 할 수 있습니다. 모달을 클릭시 모달창은 off 됩니다. 
        Modal은 PortalsModal로 document.body에 렌더링되는 점을 유의하세요.`,
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
