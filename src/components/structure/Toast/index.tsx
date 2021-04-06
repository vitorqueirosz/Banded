import { ToastProps } from 'contexts';
import { FiAlertCircle, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import theme from 'styles/theme';
import * as S from './Toast.styles';

export type ToastItemProps = {
  show: boolean;
  handleCloseToast: () => void;
  hasMarginTop?: boolean;
} & ToastProps

type Icon = {
  [key: string]: JSX.Element;
}

const typeIcon = {
  error: <FiAlertCircle color={theme.colors.dark.light} size={16} />,
  success: <FiCheckCircle color={theme.colors.dark.light} size={16} />,
} as Icon;

export const Toast = ({
  title,
  description,
  type,
  show,
  handleCloseToast,
  hasMarginTop,
}: ToastItemProps) => (
  <S.Wrapper hasMarginTop={hasMarginTop} type={type} show={show}>
    <S.Divisor>
      <S.Title>{title}</S.Title>
      {typeIcon[type]}
    </S.Divisor>
    <S.Description>{description}</S.Description>
    <S.IconWrapper onClick={handleCloseToast}>
      <FiXCircle size={14} color="#fff" />
    </S.IconWrapper>
  </S.Wrapper>
);
