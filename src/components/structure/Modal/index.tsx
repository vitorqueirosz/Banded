import { FiXCircle } from 'react-icons/fi';
import * as S from './Modal.styles';

export type ModalProps = {
  show: boolean;
  children: React.ReactNode;
  width: string;
  height?: string;
  handleCloseModal: () => void;
}

export const Modal = ({
  show,
  children,
  width,
  height,
  handleCloseModal,
}: ModalProps) => (
  <S.Wrapper show={show}>
    <S.Content height={height} width={width}>
      <FiXCircle color="#fff" size={18} onClick={handleCloseModal} />
      {children}
    </S.Content>
  </S.Wrapper>
);
