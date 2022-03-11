import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
    transition: ease-in-out 1.1s;
    margin-top: 2em;
    overflow:hidden;  
    ${props => props.ispasswordempty ? null : `
        transition: 0.3s;
        opacity: 0;
        height: 0;
    `}
    `;

export const Paragraph = styled.p`
        opacity:${props => props.setOpacity === 'check' ? '1' : '0.5'};
        font-size: 1rem;
        margin: 0 0 1.6em 0;
    `;

export const AwesomeCheckIcon = styled(FontAwesomeIcon)`
        margin-right: 1.1rem;
        height: 1.2rem;
        font-size: medium;
        border: 2px solid lightgreen;
        border-radius: 50%;
        color: lightgreen;
    `;