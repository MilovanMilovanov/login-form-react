import styled from "styled-components";
import { MagicBorder } from './MagicBorder.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
    margin: 0 0 0.7em 0;
    width: 87%;
    ${props => {
       return props.type !== 'password' && !props.userDetails.formValidation[props.type] ?
          MagicBorder({ width: '2px', color: 'red', duration: '0.3s', direction: '0' })
           :
          MagicBorder({ width: '2px', color: 'rgba(121, 214, 250, 0.9)', duration: '0.3s', direction: '0' })
    }}`;

export const Input = styled.input`
    padding: 0.7em 0.7em 0.7em 2em;
    background-color: #f8f7f7;
    font-size: 1.1rem;
    width: 100%;
`;

export const Error = styled.p`
    margin: 0 0 0.4em 0;
    font-size: 1.1rem;
    color: red;
`;

export const AwesomeEye = styled(FontAwesomeIcon)`
    ${props => !props.ispasswordempty && `
        pointer-events: none;
        transition: 0.3s;
        opacity: 0;
        height: 0;
    `}
    transform: translate(21px, 15px);
    color: rgb(26, 43, 68);
    position: absolute;
    font-size: large;
    cursor: pointer;
    `;
