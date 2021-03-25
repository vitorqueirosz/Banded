import React, { ButtonHTMLAttributes } from 'react';
import { Spinner } from '../Spinner';
import * as S from './Button.styles';

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, color = 'primary', isLoading }: ButtonProps) => (
  <S.Button
    color={color}
  >
    {isLoading ? (
      <Spinner />
    ) : (
      <>{children}</>
    )}
  </S.Button>
);
