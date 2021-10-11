import { SelectBoxHeader, SelectBoxList } from '@/components/index';
import { ReactElement } from 'react';

export interface SelectBoxProps {
  children: (ReactElement<typeof SelectBoxHeader> | ReactElement<typeof SelectBoxList>)[];
}
