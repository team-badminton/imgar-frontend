export interface DropDownListProps {
  dropdownHeader: string;
  dropdownItemList: string[];
  buttonOnClick: React.MouseEventHandler<HTMLUListElement>;
}

export interface SetDisplayProps {
  isShow: boolean;
}
