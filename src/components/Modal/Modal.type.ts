export interface ModalProps {
  /** 모달을 숨기기 위한 핸들러를 입력해야 합니다. */
  handleHide: () => void;
  /** 모달 컨텐츠입니다. */
  children: React.ReactNode;
}
