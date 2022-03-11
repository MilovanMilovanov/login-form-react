import styled from "styled-components";
import { MagicBorder } from './MagicBorder.styles';

export const Button = styled.button`
text-decoration:none;
text-transform:uppercase;
cursor:pointer;
position: relative;
min-width: 100%;
padding: 1.2em;
max-height: 80px;
margin: 0;
font-size: 1.2rem;
background: #efefef;
${props => props.formTitleAnimation && props.isFormValid &&
        `color: white;
         letter-spacing: 0.5em;
         text-shadow: 0 0 5px #0f0,
         0 0 6px #0f0,
         0 0 7px #0f0,
         0 0 10px #0f0,
         0 0 15px #0f0,
         0 0 25px #0f0,
         0 0 30px #0f0;
         transition: color 1s, letter-spacing 0.7s, text-shadow 3s;
         `
        }
${MagicBorder({ width: '2px', color: 'rgba(121, 214, 250, 0.9)', duration: '0.5s', direction: '0' })};
`;

