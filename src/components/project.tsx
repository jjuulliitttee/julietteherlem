import { styled, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Stack, Theme } from "@mui/material";
import { Box } from "@mui/system"
import { useEffect } from "react";
import { BootstrapButton } from "../components/MyButton";
import projects from '../constants/projects';
import { ProjectType } from "../entities/ProjectType";
import { useParams } from 'react-router-dom';
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
      marginLeft: '7vw',
      marginTop: '4.54vh',
      position: "absolute",
      lineHeight: "2.22vh",
    },
    projectDesc: {
      fontFamily: "Corbel_light, sans-serif",
      fontSize: "1.85vh",
      fontWeight: 400,
      lineHeight: "2.22vh",
    },
    projectImg: {
        alignSelf: 'flex-start',
        paddingLeft: '10.73vw',
        borderRadius: '40px',
    },
    pagePic: {
      minHeight: "100vh",
    },
    customLink: {
      color: theme.palette.mode === 'dark' ? 'white' : 'black'
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
      <Lien className={classes.customLink} style={{ textDecoration: 'none'}} to="/">
        <Stack direction="row" spacing={1} className={classes.goBackButton} >
          <img alt="GoBackPic" style={{width:"1.56vw", height:"2.778vh"}} src={isDarkMode ? goBackPicDark : goBackPicLight}/>
          <Typography style={{marginTop:"0.5vh"}} className={classes.projectDesc}>
              Go back to work
          </Typography>
        </Stack>
      </Lien>
    <Box
        paddingLeft="7vw"
        paddingRight="7vw"
        paddingTop="18.52vh"
        paddingBottom="231px"
        width="100%"
        display="flex"
        flexDirection="row"
    >
      <Stack direction="column" spacing={1} style={{width:"28.8vw"}}>
        <Typography variant="body1" style={{marginBottom:"1.2vh", lineHeight:"6.02vh"}}>
          {name}
        </Typography>
        <Typography variant="subtitle1" style={{marginBottom:"2.31vh"}}>
          {content?.fullType}
        </Typography>
        <Typography className={classes.projectDesc} style={{marginBottom:"0.74vh"}}>
            {content?.desc}
        </Typography>
        <Typography component="div" className={classes.projectDesc} style={{marginBottom:"0.833vh"}}>
            <Box display="inline" fontFamily="Corbel_bold, sans-serif" fontWeight={700}>My mission : </Box>{content?.mission}
        </Typography>
        <Typography className={classes.projectDesc} style={{marginBottom:"5.46vh", fontFamily:"Corbel, sans-serif" ,fontWeight:300}}>
            {content?.date}
        </Typography>
        <Stack direction="row" justifyContent="start" spacing={1}>
            {content?.techno.map((elem) => (
            <Img src={process.env.PUBLIC_URL + elem} style={{maxWidth:"2.16vw", maxHeight: "3.8vh"}}/>
            ))}
        </Stack>
        {url && <BootstrapButton
            style={{backgroundColor: "#20E0EE", marginTop:"10.09vh"}}
            variant="contained"
            href={url}
          >
            Watch Video
        </BootstrapButton>}
      </Stack>
      <Box flexGrow={1}/>
      <Img alt="projectPic" style={{maxWidth:"82.41vw", maxHeight: "52.5vh"}} src={`${process.env.PUBLIC_URL}/thumbails/subnail-${index}.png`} className={classes.projectImg}/>
    </Box>
  <Box className={classes.pagePic}>
    <Img style={{maxWidth:"100vw"}}  src={process.env.PUBLIC_URL + content?.pagePic}/>
  </Box>
  </div>
    );
};