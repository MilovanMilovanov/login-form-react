import { css } from "styled-components";

export const MagicBorder = ({ width, color, duration, direction }) => css`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: calc(100% + ${width} * 2);
    height: calc(100% + ${width} * 2);
    top: calc(${width} / -1);
    left: calc(${width} / -1);
    background: linear-gradient(to right, ${color} 0%, ${color} 100%),
      linear-gradient(to top, ${color} 50%, transparent 50%),
      linear-gradient(to top, ${color} 50%, transparent 50%),
      linear-gradient(to right, ${color} 0%, ${color} 100%),
      linear-gradient(to left, ${color} 0%, ${color} 100%);
    background-size: 65% ${width}, ${width} 200%, ${width} 200%, 0% ${width},
      0% ${width};
    background-position: -150% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
    background-repeat: no-repeat, no-repeat;
    transition: transform ${duration} ease-in-out,
      background-position ${duration} ease-in-out,
    background-size ${duration} ease-in-out;
    transform: scaleX(0) rotate(calc(180deg * ${direction}));
    transition-delay: calc(${duration} * 2), ${duration}, 0s;
  };
  
  ${props => props.isFormValid !== undefined ?
    !props.disabled &&
     `&:before {
       background-size: 200% ${width}, ${width} 400%, ${width} 400%, 55% ${width},
       55% ${width};
       background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
       transform: scaleX(1) rotate(calc(180deg * ${direction}));
       transition-delay: 0s, ${duration}, calc(${duration} * 2);
     }`
    :
  `&:hover {
    &:before {
      background-size: 200% ${ width}, ${width} 400%, ${width} 400%, 55% ${width},
      55% ${ width};
      background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
      transform: scaleX(1) rotate(calc(180deg * ${direction}));
      transition-delay: 0s, ${duration}, calc(${duration} * 2);
      z-index: -1;
    }
  }`
 }`;


