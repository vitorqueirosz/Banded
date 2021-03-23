import React, { ButtonHTMLAttributes } from 'react';

import * as S from './Button.styles';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, color = 'primary' }: ButtonProps) => (
  <S.Button color={color}>{children}</S.Button>
);
