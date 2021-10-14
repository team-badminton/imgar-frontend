export interface InputBoxProps {
  labelText: string;
  placeholder: string;
  value: string;
  type?: string;
  setValue: (value: string) => void;
}
