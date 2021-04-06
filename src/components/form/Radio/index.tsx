import { InputHTMLAttributes } from 'react';
import { UseFormMethods } from 'react-hook-form';
import * as S from './Radio.styles';

type RadioProps = {
  label: string;
  name: string;
  value: string;
  // onChange: () => void;
} & Pick<UseFormMethods, 'register'>
  & InputHTMLAttributes<HTMLInputElement>

const Radio = ({ label, name, register, value, ...rest }: RadioProps) => (
  <S.Container>

    <S.RadioWrapper>
      <S.Radio
        type="radio"
        name={name}
        id={name}
        ref={register}
        value={value}
        // onChange={onChange}
        {...rest}
      />
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
    </S.RadioWrapper>
  </S.Container>
);

export default Radio;
