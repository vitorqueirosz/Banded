import { InputHTMLAttributes } from 'react';
import * as S from './Checkbox.styles';

export type CheckboxProps = {
  checked: boolean;
  handleCheck: () => void;
  label: string;
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  checked,
  handleCheck,
  name,
  label,
  ...rest
}: CheckboxProps) => (
  <S.Container>
    {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
    <S.Input
      checked={checked}
      type="checkbox"
      id={name}
      onChange={handleCheck}
      {...rest}
    />
  </S.Container>
);

export default Checkbox;
