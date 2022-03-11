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
    width: 100%;
    padding: 0.7em 0.7em 0.7em 2em;
    background-color: #f8f7f7;
    font-size: 1.1rem;
`;

export const Error = styled.p`
    color: red;
    font-size: 1.1rem;
    margin: 0 0 0.4em 0;
`;

export const AwesomeEye = styled(FontAwesomeIcon)`
    ${props => props.ispasswordempty ? null : `
            transition: 0.3s;
            opacity: 0;
            height: 0;
            pointer-events: none;
        `}
    font-size: large;
    position: absolute;
    cursor: pointer;
    color: rgb(26, 43, 68);
    transform: translate(21px, 15px);
    `;