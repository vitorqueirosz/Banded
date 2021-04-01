import { InputHTMLAttributes } from 'react';
import { UseFormMethods } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';

import * as S from './TextField.styles';

export type InputProps = {
  isSearch?: boolean;
  label?: string;
  name?: string;
  error?: string | undefined;
  color?: 'primary' | 'secondary';
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<UseFormMethods, 'register'>;
export const TextField = ({
  label,
  name,
  register,
  error,
  isSearch,
  color = 'primary',
  ...rest }: InputProps) => (
    <S.Wrapper isSearch={isSearch} color={color}>
      <S.InputWrapper>
        {isSearch && <FiSearch size={20} color="#555" />}
        <S.Input name={name} id={name} type="text" ref={register} {...rest} />
        {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
);
