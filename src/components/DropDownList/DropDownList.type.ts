export interface DropDownListProps {
  dropdownItemList: string[];
  dropdownHeader: string;
  handleDropDownList: React.MouseEventHandler<HTMLUListElement>;
}

export interface SetDisplayProps {
  isShow: boolean;
}
