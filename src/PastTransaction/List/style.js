import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const StyledGrid = styled(Grid)`
textAlign: center; 
position: relative;
left: 25%;
${props => props.theme.breakpoints.down("md")}{
    left: 0;
}`
export const StyledGridOne = styled(Grid)`
position: fixed;
${props => props.theme.breakpoints.down("md")}{
    position: relative;
}`

export const StyledGridTwo = styled(Grid)`
    padding: 0px 20px;

${props => props.theme.breakpoints.down("md")}{
    padding: 20px;
}`;