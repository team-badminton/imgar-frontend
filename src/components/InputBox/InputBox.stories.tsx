import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import InputBox from './InputBox';

export default {
  title: 'Components/InputBox',
  component: InputBox,
  args: {
    placeholder: 'PlaceHolder',
    labelText: 'Label',
  },
  parameters: {
    docs: {
      description: {
        component: `Input 컴포넌트 입니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = args => <InputBox {...args} />;

export const Default = Template.bind({});
