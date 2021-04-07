import { ForwardedRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Dropdown.styles';

type DropdownProps = {
  handleCloseDropDown: () => void;
  show: boolean;
  options: {
    link?: string;
    name?: string;
    callback?: () => void;
  }[];
}

export const Dropdown = forwardRef(({
  options,
  show,
  handleCloseDropDown,
}: DropdownProps, ref: ForwardedRef<HTMLDivElement>) => (
  <S.Container onClick={handleCloseDropDown} ref={ref} show={show}>
    {options.map(({ link, name, callback }) => (
      <S.ButtonDuo
        as={link ? Link : 'button'}
        to={link}
        key={name}
        onClick={callback && callback}
      >
        {name}
      </S.ButtonDuo>
    ))}
  </S.Container>
));
