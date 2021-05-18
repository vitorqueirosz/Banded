import { Error } from 'components/structure';
import { forwardRef, InputHTMLAttributes } from 'react';
import { FiSearch } from 'react-icons/fi';

import * as S from './TextField.styles';

export type TextFieldProps = {
  isSearch?: boolean;
  label?: string;
  name?: string;
  error?: string | undefined;
  color?: 'primary' | 'secondary';
  inputSize?:'xsmall' | 'normal' | 'small';
} & InputHTMLAttributes<HTMLInputElement>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({
  label,
  name,
  error,
  isSearch,
  color = 'primary',
  inputSize = 'normal',
  ...rest }, ref) => (
    <S.Wrapper
      hasError={!!error}
      isSearch={isSearch}
      color={color}
    >
      <S.InputWrapper>
        {isSearch && <FiSearch size={20} color="#555" />}
        <S.Input
          ref={ref}
          name={name}
          id={name}
          type="text"
          inputSize={inputSize}
          hasLabel={!!label}
          {...rest}
        />
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>
      {!!error && <Error>{error}</Error>}
    </S.Wrapper>
));
