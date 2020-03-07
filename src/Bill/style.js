import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { Typography, Grid } from '@material-ui/core';

export const StyledPaper = styled(Paper)`
height: 85vh;
max-width:600px;
margin:20px auto;
padding: 20px;
border-bottom: ${props => props.border };
border-top: ${props => props.border };
${props => props.theme.breakpoints.down("md")}{
    margin: 10px;
}

`;

export const StyledImg = styled.img`
height: 75px;
width: 75px;
border-radius: 50%;
`;

export const StyledName = styled(Typography)`
text-align: ${props => props.textalign};
padding-top: ${props => props.paddingtop};
font-size: ${props => props.fontsize} !important;
${props => props.theme.breakpoints.down("md")}{
    text-align: ${props => props.textaligncenter};
}
`;

export const StyledGrid = styled(Grid)`
background-color: gainsboro;
padding: 15px;
border-top: 10px solid darkcyan;
`
export const BorderBottomGrid = styled(Grid)`
border-bottom: ${props => props.border };
margin-bottom: 10px !important;
`;

export const RightGrid = styled(Grid)`
align-items: flex-end;
`;