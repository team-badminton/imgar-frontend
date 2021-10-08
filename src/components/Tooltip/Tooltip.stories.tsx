import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Tooltip from './Tooltip';
import { TooltipBox } from './Tooltip.styled';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  args: {},
  parameters: {
    docs: {
      description: {
        component: `마우스를 올리면 툴팁이 나오는 컴포넌트 입니다. 컴포넌트를 래핑하여 사용할 수 있습니다.`,
      },
    },
  },
  decorators: [
    Story => {
      return <div style={{ width: '100%', height: '100vh', position: 'relative' }}>{Story()}</div>;
    },
  ],
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = args => <Tooltip {...args} />;
const BoxTemplate: ComponentStory<typeof TooltipBox> = args => <TooltipBox {...args} />;

export const Default: ComponentStory<typeof Tooltip> = Template.bind({});
Default.args = {
  children: <div style={{ height: '100px', width: '100px', background: 'white' }}></div>,
};
Default.decorators = [
  Story => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300vh',
      }}
    >
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  ),
];

export const TooltipBoxWithDownArrow: ComponentStory<typeof TooltipBox> = BoxTemplate.bind({});
TooltipBoxWithDownArrow.args = {
  arrow: 'down',
  arrowOffset: 0,
  children: 'Tooltip with down arrow',
  style: { top: 'initial', bottom: 'initial' },
};

export const TooltipBoxWithUpArrow: ComponentStory<typeof TooltipBox> = BoxTemplate.bind({});
TooltipBoxWithUpArrow.args = {
  arrow: 'up',
  arrowOffset: 0,
  children: 'Tooltip with up arrow',
  style: { top: 'initial', bottom: 'initial' },
};
