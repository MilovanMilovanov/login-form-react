import styled from "styled-components";

export const Title = styled.h2`
    padding: 15px 20px 25px 20px;
    color: ${props => props.theme.titleColor};
    ${props => props.children !== 'login' &&
        `text-shadow: 0 0 5px #0f0,
         0 0 6px #0f0,
         0 0 7px #0f0,
         0 0 10px #0f0,
         0 0 15px #0f0,
         0 0 25px #0f0,
         0 0 30px #0f0;
         letter-spacing: 0.2em;
         color: white;
         text-align: center;
         transition: color 1s, letter-spacing 0.7s, text-shadow 3s;
         `
        }
`;
