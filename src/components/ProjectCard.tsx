import React, { useState } from "react";

import Box from "@material-ui/core/Box";
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
      backgroundSize: "cover",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "25px",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${`thumbails/project-${props.index}.png`})`,
      '&:hover': {
        backgroundImage: `${props.confidential ? `url(thumbails/confidential.png), ` : ``}linear-gradient(180deg, rgba(243, 90, 80, 0.9) 0%, rgba(243, 90, 80, 0.9) 100%), url(${`thumbails/project-${props.index}.png`})`
      }
    }),
    tagbox: {
     marginTop: "2.12vh",
     marginLeft: "1.45vw",
     paddingTop:"0.46vh",
     paddingBottom:"0.46vh",
     paddingLeft:"1.14vw",
     paddingRight:"1.14vw",
     background: "#FFFFFF",
     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
     borderRadius: "17px",
     color: "#071030"
    },
    typeBox: {
      marginTop:"1.85vh",
      marginLeft: "1.45vw",
      marginBottom: "2.12vh",
      marginRight: "1.45vw",
      paddingTop:"0.46vh",
      paddingBottom:"0.46vh",
      paddingLeft:"1.14vw",
      paddingRight:"1.14vw",
      background: "#000000",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "17px",
      color: "#FFFFFF"
    },
    tagName: {
      fontSize: "2vh",
      lineHeight: "2.7vh",
      fontWeight: 700
    },
    typeName: {
      fontSize: "1.666vh",
      lineHeight: "2.7vh",
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
        onClick={() => {
          if (type === ProjectType.ILLUSTRATION)
            handleOpen()
          else if (index < projects.length) {
            history.push(`/project/${index}`)
          }
        }}
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        sx={{
          height: "25vh",
          width: "17.39vw",
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
