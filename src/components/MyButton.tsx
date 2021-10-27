import * as React from 'react';
import { styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import { keyframes } from '@mui/styled-engine';

const pop = keyframes`
50% { transform: scale(1.09) }`

const pulse = keyframes`
25% {
  transform: scale(0.9)
}
75% {
  transform: scale(1.1)
}`

export const BootstrapButton = styled(Button)(({ theme}) => ({
    boxShadow: "2px 2px 9px 0px #00000040",
    textTransform: 'none',
    fontSize: 26,
    fontFamily: "Red Hat Display, sans-serif",
    fontWeight: 700,
    height: 62,
    paddingLeft: 51,
    paddingRight: 51,
    borderRadius: 25,
    alignSelf:"flex-start",
    backgroundColor: "#F35A50",
    '&:hover': {
      backgroundColor: "#F35A50",
      animation: `${pop} 0.3s linear 1`
    },
    '&:active': {
      backgroundColor: '#FFFFFF',
      color: '#000000'
    }
  }));