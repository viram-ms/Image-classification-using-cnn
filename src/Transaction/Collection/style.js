import styled from 'styled-components';
import {Grid, Typography, Paper} from '@material-ui/core';
import { style } from '@material-ui/system';

export const ImageHolder = styled.img`
  && {
    height: 100%;
    width: 220px;
    object-fit: cover;
    border-radius: 16px 0px 0px 16px;
    ${props => props.theme.breakpoints.down("md")} {
      width: 100%;
    border-radius: 16px 16px 0px 0px;
    }
  }
`;

export const TripHolder = styled(Grid)`
  && {
    background: #fffdf7;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    flex-wrap: nowrap;
    min-height: 180px;
    margin-bottom: 20px;
    max-width: 750px;
    margin: 20px;
    flex-direction: row;
    ${props => props.theme.breakpoints.down("md")} {
      flex-direction: column;
      margin-top: 20px;
    }
    .horz-menu {
      button {
        padding: 4px 8px;
        padding-left: 0;

        ${props => props.theme.breakpoints.up("sm")} {
          margin-bottom: 5px;
        }
        

      }
    }
  }
`;

export const StyledText = styled(Typography)`
  padding: 5px;
`;

export const StyledGrid = styled(Grid)`
  padding: 20px;
  ${props => props.theme.breakpoints.down("md")}{
    padding: 10px;
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 50px auto;
  display: flex;
  text-align: center;
  justify-content: center;
`;