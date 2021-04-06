import { ForwardedRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Dropdown.styles';

type DropdownProps = {
  show: boolean;
  options: {
    link?: string;
    name?: string;
  }[];
}

export const Dropdown = forwardRef(({
  options,
  show,
}: DropdownProps, ref: ForwardedRef<HTMLDivElement>) => (
  <S.Container ref={ref} show={show}>
    {options.map(({ link, name }) => (
      <S.ButtonDuo
        as={link ? Link : 'button'}
        to={link}
        key={name}
      >
        {name}
      </S.ButtonDuo>
    ))}
  </S.Container>
));
