import { Box, Grid, Link, Popover} from '@material-ui/core';
import { useState } from 'react';

export interface ContactIconProps {
    src: string
    size: number
    alt: string
    link?: string
}

export const ContactIcon: React.FC<ContactIconProps> = ({
    children,
    src,
    size,
    alt,
    link
}) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <Grid item>
          {link ?
            <Link href={link}>
              <img alt={alt} src={src} width={size} height={size}/>
            </Link> : 
            <Box onClick={handleClick}>
               <img alt={alt} src={src} width={size} height={size}/>
            </Box>
          }
          <Popover
             anchorEl={anchorEl}
             open={open} 
             onBackdropClick={() => handleClose()}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'center',
             }}
             transformOrigin={{
               vertical: 'top',
               horizontal: 'center',
             }}
           >
             {children}
          </Popover>
        </Grid>
    )
}