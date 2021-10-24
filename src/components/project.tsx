import { Button, styled, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Grid, Link, Stack, Theme } from "@mui/material";
import { Box, grid } from "@mui/system"
import aboutMePic from "./assets/aboutMe.png"
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useState } from "react";
import { BootstrapButton } from "../components/MyButton";
import projects from '../constants/projects';
import { ProjectType } from "../entities/ProjectType";
import { useParams } from 'react-router-dom';

interface ProjectPageProps {}

type ProjectParams = {
    id: string;
}

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    minidth: '100%',
    minHeight: '100%',
  });

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minHeight: "100vh",
    },
    projectTitle: {
      fontSize: "20px",
      width: "75%",
      lineHeight: "24px",
    },
    projectDesc: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    projectImg: {
        borderRadius: '40px'
    }
  }));

export const ProjectPage: React.FC<ProjectPageProps> = () => {
    const {id} = useParams<ProjectParams>();
    const index: number = +id;
    const classes = useStyles();
    var {name, type} = projects[index];
    if (projects[index].url)
        var url = projects[index].url;
    if (type !== ProjectType.ILLUSTRATION)
        var content = projects[index].content;
    return (
    <div
        id="project"
        className={classes.root}
    >
    <Box
        paddingLeft="135px"
        paddingRight="135px"
        paddingTop="166px"
        paddingBottom="231px"
        width="100%"
        display="flex"
        flexDirection="row"
    >
      <Stack direction="column" spacing={1}>
        <Typography variant="body1" style={{marginBottom:"13px", lineHeight:"65px"}}>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{marginBottom:"59px"}}>
          {content?.fullType}
        </Typography>
        <Typography className={classes.projectTitle} style={{marginBottom:"59px"}}>
            {content?.desc}
        </Typography>
        <Typography className={classes.projectTitle} style={{marginBottom:"59px"}}>
            {content?.mission}
        </Typography>
        <Typography className={classes.projectTitle} style={{marginBottom:"59px"}}>
            {content?.date}
        </Typography>
        <Stack>
            <Img src={content?.techno[0]}/>
        </Stack>
        {url && <BootstrapButton
            style={{backgroundColor: "#FF9345", marginTop:"109px"}}
            variant="contained"
            href={url}
          >
            Watch Video
        </BootstrapButton>}
      </Stack>
      <Img alt="projectPic" src={`/thumbails/project-${index}.png`} width={841
      } height={732} className={classes.projectImg}/>
    </Box>
  </div>
    );
};