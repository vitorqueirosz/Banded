import { ChangeEvent, InputHTMLAttributes } from 'react';
import { UseFormMethods } from 'react-hook-form';
import * as S from './Checkbox.styles';

export type CheckboxProps = Pick<UseFormMethods, 'register'> & {
  checked?: boolean;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = ({
  checked,
  onChange,
  name,
  label,
  register,
  ...rest
}: CheckboxProps) => (
  <S.Container>
    <S.Input
      ref={register}
      checked={checked}
      type="checkbox"
      name={name}
      id={label}
      onChange={(value) => onChange && onChange(value)}
      {...rest}
    />
    {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
  </S.Container>
);
