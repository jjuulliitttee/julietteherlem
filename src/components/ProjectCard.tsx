import React, { useState } from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import { Modal, styled, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ProjectType } from "../entities/ProjectType";
import projects from "../constants/projects";
import { Grid } from "@mui/material";
import {useHistory} from 'react-router-dom';

interface ProjectCardProps {
  className?: string;
  index: number;
  everything?: boolean;
  confidential: boolean;
}

interface Props {
  index: number;
  confidential: boolean;
}

const Img = styled('img')({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const useStyles = makeStyles({
    thumbnail: (props: Props) => ({
      backgroundSize: "contain",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "25px",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${`thumbails/project-${props.index}.png`})`,
      '&:hover': {
        backgroundImage: `${props.confidential ? `url(thumbails/confidential.png), ` : ``}linear-gradient(180deg, rgba(243, 90, 80, 0.9) 0%, rgba(243, 90, 80, 0.9) 100%), url(${`thumbails/project-${props.index}.png`})`
      }
    }),
    tagbox: {
     marginTop: "23px",
     marginLeft: "28px",
     paddingTop:"5px",
     paddingBottom:"5px",
     paddingLeft:"22px",
     paddingRight:"22px",
     background: "#FFFFFF",
     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
     borderRadius: "17px",
     color: "#071030"
    },
    typeBox: {
      marginTop:"20px",
      marginLeft: "28px",
      marginBottom: "23px",
      marginRight: "28px",
      paddingTop:"5px",
      paddingBottom:"5px",
      paddingLeft:"22px",
      paddingRight:"22px",
      background: "#000000",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "17px",
      color: "#FFFFFF"
    },
    tagName: {
      fontSize: "22px",
      fontWeight: 700
    },
    typeName: {
      fontSize: "18px",
      fontWeight: 700
    },
    illustrations: {
      position: "absolute",
      left:"25%",
      width:"50%",
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:'center',
    }
})

export const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  everything,
  confidential
}) => {
    if (!confidential)
      var {name, type} = projects[index];
    var [over, setOver] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const props = {index, confidential};
    const classes = useStyles(props);
    const history = useHistory();
  return (
    <Grid item xs={3}>
      <Box
        onClick={() => {type === ProjectType.ILLUSTRATION ? handleOpen() : history.push(`/project/${index}`)}}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        sx={{
          height: "253px",
          width: "334px",
        }}
        className={classes.thumbnail}
        id={`Project-${index}`}
      >
        <Box
            display={over && !confidential ? "inline-block" : "none"}
            className={classes.tagbox}
          >
          <Typography className={classes.tagName}>{name}</Typography>
        </Box>
        <Box
          display={over && everything ? "inline-block" : "none"}
          className={classes.typeBox}
        >
          <Typography className={classes.typeName}>{type}</Typography>
        </Box>
      </Box>
      <Modal
        keepMounted
        open={open}
        onBackdropClick={handleClose}
      >
        <Box className={classes.illustrations}>
          <Img alt="illlustration" src={`illustrations/illustration-${index}.jpg`}/>
        </Box>
      </Modal>
    </Grid>
  );
};
