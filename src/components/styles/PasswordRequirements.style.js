import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.section`
    transition: ease-in-out 1.1s;
    margin-top: 2em;
    overflow:hidden;  
      ${props => !props.ispasswordempty && `
        transition: 0.3s;
        opacity: 0;
        height: 0;
    `}
    `;

export const Paragraph = styled.p`
        opacity:${props => props.setOpacity === 'check' ? '1' : '0.5'};
        margin: 0 0 1.6em 0;
        font-size: 1rem;
    `;

export const AwesomeCheckIcon = styled(FontAwesomeIcon)`
        border: 2px solid lightgreen;
        margin-right: 1.1rem;
        border-radius: 50%;
        font-size: medium;
        color: lightgreen;
        height: 1.2rem;
    `;
