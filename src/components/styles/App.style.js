import styled from 'styled-components';
import { MagicBorder } from './MagicBorder.styles';

export const AppWrapper = styled.section`
background: ${props => props.appStyle ?
        'rgba(255, 255, 255, .4)'
        :
        'white'
    };
    oveflow: hidden;
border-radius: ${props => props.theme.primaryBorderRadius};
padding: ${props => props.theme.primaryPadding};
${MagicBorder({ width: '3px', color: 'rgba(121, 214, 250, 0.9)', duration: '0.3s', direction: '0' })};
`;

