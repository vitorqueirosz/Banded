import { ToastProps } from 'contexts';
import { FiXCircle } from 'react-icons/fi';
import * as S from './Toast.styles';

export type ToastItemProps = {
  show: boolean;
  handleCloseToast: () => void;
  hasMarginTop?: boolean;
} & ToastProps

export const Toast = ({
  title,
  description,
  type,
  show,
  handleCloseToast,
  hasMarginTop,
}: ToastItemProps) => (
  <S.Wrapper hasMarginTop={hasMarginTop} type={type} show={show}>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.IconWrapper onClick={handleCloseToast}>
      <FiXCircle size={14} color="#fff" />
    </S.IconWrapper>
  </S.Wrapper>
);
