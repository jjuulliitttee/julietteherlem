import { Button, styled, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Grid, Link, Stack, Theme } from "@mui/material";
import { Box, grid } from "@mui/system"
import aboutMePic from "./assets/aboutMe.png"
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import { useEffect, useState } from "react";
import { BootstrapButton } from "../components/MyButton";
import projects from '../constants/projects';
import { ProjectType } from "../entities/ProjectType";
import { useParams, useHistory } from 'react-router-dom';
import {Link as Lien} from 'react-router-dom';
import goBackPicDark from '../assets/GoBackDark.png';
import goBackPicLight from '../assets/GoBackLight.png';
import { useDarkMode } from 'usehooks-ts';

interface ProjectPageProps {}

type ProjectParams = {
    id: string;
}

const Img = styled('img')({
    display: 'block',
  });

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      minHeight: "100vh",
    },
    goBackButton: {
      marginLeft: '135px',
      marginTop: '49px',
      position: "absolute",
      lineHeight: "24px",
    },
    projectDesc: {
      fontFamily: "Corbel_light, sans-serif",
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    projectImg: {
        paddingLeft: '206px',
        borderRadius: '40px'
    },
    pagePic: {
      minHeight: "100vh",
    }
  }));

export const ProjectPage: React.FC<ProjectPageProps> = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const {isDarkMode} = useDarkMode();
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
      <Lien style={{ textDecoration: 'none' }} to="/">
        <Stack direction="row" spacing={1} className={classes.goBackButton} >
          <img alt="GoBackPic" width="30px" height="30px" src={isDarkMode ? goBackPicDark : goBackPicLight}/>
          <Typography className={classes.projectDesc}>
              Go back to work
          </Typography>
        </Stack>
      </Lien>
    <Box
        paddingLeft="135px"
        paddingRight="135px"
        paddingTop="200px"
        paddingBottom="231px"
        width="100%"
        display="flex"
        flexDirection="row"
    >
      <Stack direction="column" spacing={1} style={{width:"553px"}}>
        <Typography variant="body1" style={{marginBottom:"13px", lineHeight:"65px"}}>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{marginBottom:"25px"}}>
          {content?.fullType}
        </Typography>
        <Typography className={classes.projectDesc} style={{marginBottom:"8px"}}>
            {content?.desc}
        </Typography>
        <Typography component="div" className={classes.projectDesc} style={{marginBottom:"9px"}}>
            <Box display="inline" fontFamily="Corbel_bold, sans-serif" fontWeight={700}>My mission : </Box>{content?.mission}
        </Typography>
        <Typography className={classes.projectDesc} style={{marginBottom:"59px", fontFamily:"Corbel, sans-serif" ,fontWeight:300}}>
            {content?.date}
        </Typography>
        <Stack direction="row" justifyContent="start" spacing={1}>
            {content?.techno.map((elem) => (
            <Img src={elem} width={41} height={41}/>
            ))}
        </Stack>
        {url && <BootstrapButton
            style={{backgroundColor: "#20E0EE", marginTop:"109px"}}
            variant="contained"
            href={url}
          >
            Watch Video
        </BootstrapButton>}
      </Stack>
      <Img alt="projectPic" src={`/thumbails/subnail-${index}.png`} className={classes.projectImg}/>
    </Box>
  <Box className={classes.pagePic}>
    <Img  src={content?.pagePic}/>
  </Box>
  </div>
    );
};