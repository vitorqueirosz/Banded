import { keyframes } from 'styled-components';

export const appearFromRight = keyframes`
  0% {
    transform: translateX(20%);
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 0.5;
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

export const appearFromBottom = keyframes`
  0% {
    transform: translateY(20%);
    opacity: 0;
    visibility: hidden;
  }
  50% {
    opacity: 0.5;
    visibility: visible;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;
