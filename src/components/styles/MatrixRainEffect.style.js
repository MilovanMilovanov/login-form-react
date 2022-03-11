import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;

// Some of the styles didn't work in the style component itself, that's why i put them in an object
export const Wrapper = styled.div`
${{
        overflow: 'hidden',
        position: 'absolute',
        height: '100%',
        width: '100%',
        filter: 'blur(0px) brightness(150%)',
        zIndex: -1,
        left: '0',
        top: '0',
    }};
animation: ${fadeIn} ${props => props.delay ? '6s' : '3s'};
`;
