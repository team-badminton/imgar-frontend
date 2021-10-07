import React, { MouseEventHandler, ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropDownList from './DropDownList';

export default {
  title: 'Components/DropDownList',
  component: DropDownList,
  parameters: {
    docs: {
      description: {
        component: `DropDownList 컴포넌트 입니다.\n

## themeType
테마를 지정할 수 있습니다.\n
  - **black**과 **white** 두 가지 선택이 가능합니다.

## useType

### **selectBox**일 때
  - **드롭다운으로 나온 리스트 중 하나의 값만 선택할 때 사용**합니다.
  - 클릭 시 드롭 다운 리스트가 나오는 **dropdownHeader는 내부적으로 작동**합니다.
  - dropdownHeader는 **리스트의 첫번째가 기본값**입니다.
  - 클릭 시, dropdownHeader가 **클릭 된 요소로 변경**됩니다.
  - 클릭 시, 클릭 된 요소가 **글자 굵기로 강**조됩니다.
  - **handleDropDownList 함수를 필수**로 받습니다.\n
  - **handleDropDownList 함수**는 기본적으로 아래와 같이 정의해야 합니다.\n
  const handleDropDownList = 
  **($selectedLi: HTMLLIElement, $selectedChild: ReactNode) => (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {**
    // do something;
  ** };**
  \n
  - **$selectedLi**는 **현재 선택된 li 요소**이다. 따로 넣어주지 않아도 코드 내부에서 사용할 수 있습니다.
  - **$selectedChild**는 **children으로 넘겨준 요소 중 현재 선택된 요소**이다. **따로 넣어주지 않아도 코드 내부에서 사용**할 수 있습니다다. 
  - **$selectedChild는 사용자가 넣어주는 children의 요소이므로 기본적으론 ReactNode 타입이나,
  사용자가 넣어주는 타입에 맞게 변환이 가능**합니다.
  - 타입 변환 예시: $selectedChild: ReactElment 혹은 $selectedChild: string
  - 단, **ReactNode에서 벗어나는 타입은 불가**합니다.

### **ItemBox**일 때
  - **드롭다운으로 나온 리스트가 각각의 일을 하는 요소들의 나열일 때 사용**합니다.
  - 클릭 시 드롭 다운 리스트가 나오는 **dropdownHeader는 외부에서 필수로 넣어줘야합니다.
  - dropdownHeader은 ReactNode 타입만 가능합니다.
  - 클릭 시, **각 요소에 바인딩된 함수가 실행**됩니다.
  - 바인딩될 함수들은 **외부에서 필수**로 넣어줘야합니다.
  - **handleDropDownItems가 바인딩될 함수들의 리스트**입니다.
  - 바인딩될 함수의 타입은 **React.MouseEventHandler<HTMLButtonElement>**입니다.
  - **리스트에 순서대로 각 함수들이 바인딩되도록 내부적으로 구현**되어 있습니다.
`,
      },
    },
  },
} as ComponentMeta<typeof DropDownList>;

const Template: ComponentStory<typeof DropDownList> = args => <DropDownList {...args} />;

export const useTypeIsSelectBox: ComponentStory<typeof DropDownList> = Template.bind({});
useTypeIsSelectBox.args = {
  children: ['listItem 1', 'listItem 2', 'listItem 3'].map((item, index) => <span key={index}>{item}</span>),
  themeType: 'dark',
  handlerOption: {
    useType: 'selectBox',
    handleDropDownList: ($selectedLi: HTMLLIElement, $selectedChild: ReactElement) => e => {
      alert(`선택된 li 요소 : ${$selectedLi}
선택된 child 요소 : ${$selectedChild}
선택된 child 요소의 텍스트 : ${$selectedChild.props.children}`);
    },
  },
};

const handleDropDownItems = ['listItem 1', 'listItem 2', 'listItem 3'].map(
  (item): MouseEventHandler<HTMLButtonElement> => {
    return () => {
      alert(`${item} 클릭`);
    };
  },
);

export const useTypeIsItemBox: ComponentStory<typeof DropDownList> = Template.bind({});
useTypeIsItemBox.args = {
  children: ['listItem 1', 'listItem 2', 'listItem 3'].map((item, index) => <span key={index}>{item}</span>),
  themeType: 'dark',
  handlerOption: { useType: 'itemBox', handleDropDownItems: handleDropDownItems, dropdownHeader: 'dropdownHeader' },
};

export const themeTypeDark: ComponentStory<typeof DropDownList> = Template.bind({});
themeTypeDark.args = {
  ...useTypeIsSelectBox.args,
};

export const themeTypeLight: ComponentStory<typeof DropDownList> = Template.bind({});
themeTypeLight.args = {
  ...useTypeIsSelectBox.args,
  themeType: 'light',
};
