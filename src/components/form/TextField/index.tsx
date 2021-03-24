import { InputHTMLAttributes } from 'react';
import { UseFormMethods } from 'react-hook-form';

import * as S from './TextField.styles';

type InputProps = {
  label?: string;
  name?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  Pick<UseFormMethods, 'register'>;
export const TextField = ({ label, name, register, ...rest }: InputProps) => (
  <S.Wrapper>
    <S.InputWrapper>
      <S.Input name={name} id={name} type="text" ref={register} {...rest} />
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
    </S.InputWrapper>
  </S.Wrapper>
);
