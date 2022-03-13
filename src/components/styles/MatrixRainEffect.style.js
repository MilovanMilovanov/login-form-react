import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;

// Some of the styles didn't work in the style component itself, that's why i put them in an object
export const Wrapper = styled.div`
  animation: ${fadeIn} ${props => props.delay ? '6s' : '3s'};
   ${{
     filter: 'blur(0px) brightness(150%)',
     position: 'absolute',
     overflow: 'hidden',
     height: '100%',
     width: '100%',
     zIndex: -1,
     left: '0',
     top: '0',
   }};
`;
