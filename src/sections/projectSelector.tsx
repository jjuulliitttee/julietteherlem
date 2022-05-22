import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { Grid, Link, Stack, Theme } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { BootstrapButton } from "../components/MyButton";
import { ProjectCard } from "../components/ProjectCard";
import projects from "../constants/projects";
import { ProjectType } from "../entities/ProjectType";

export interface projectSelectorProp {}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.mode === "dark" ? "linear-gradient(180deg, rgba(1, 5, 19, 0.06) 1.23%, #010513 99.72%)" : "linear-gradient(180deg, rgba(243, 245, 252, 0) 0%, #F3F5FC 20.1%)",
    minHeight: "100vh",
  },
  selectorLinks: {
    color: "#FFFFFF",
    fontWeight:500,
    fontFamily:"Red Hat Display, sans-serif",
    fontSize:"2.31vh",
    '&:hover': {
      color: "#F35A50",
      fontWeight: 700
    },
    '&:focus': {
      color: "#F35A50",
      fontWeight: 700,
      textDecoration: "underline"
    }
  }
}));

export const ProjectSelector: React.FC<projectSelectorProp> = () => {
  const [selectEverything, setSelectEverything] = useState(false);
  const [projectType, setProjectType] = useState<ProjectType | "">("");
  const classes = useStyles();
  
  var projectIndex: number[] = [];
  if (!projectType)
    projectIndex = Array.from(Array(selectEverything ? projects.length : 4 ).keys());
  else {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i].type === projectType)
        projectIndex.push(i);
    }
  }
    return (
    <div
      id="Project-Selector"
      className={classes.root}
    >
      <Box
          paddingLeft="7vw"
          paddingRight="7vw "
          paddingTop="21.38vh"
          paddingBottom="21.38vh"
          width="100%"
      >
        <Typography variant='body1'>
          Some Project
        </Typography>
        <Box sx={{
          marginTop:"9.88vh",
          marginLeft:"26.87vw",
          }}>
          <Stack spacing={7} direction="row" justifyContent="flex-start">
            <Link onClick={() => {setProjectType(ProjectType.UIUX); setSelectEverything(false);}} component="button" color="inherit" underline="hover" className={classes.selectorLinks}>UI/UX</Link>
            <Link onClick={() => {setProjectType(ProjectType.GRAPHIC); setSelectEverything(false);}} component="button" color="inherit" underline="hover" className={classes.selectorLinks}>Graphic</Link>
            <Link onClick={() => {setProjectType(ProjectType.AUDIOVISUAL); setSelectEverything(false);}} component="button" color="inherit" underline="hover" className={classes.selectorLinks}>Audiovisual</Link>
            <Link onClick={() => {setProjectType(ProjectType.ILLUSTRATION); setSelectEverything(false);}} component="button" color="inherit"  underline="hover" className={classes.selectorLinks}>Illustration</Link>
          </Stack>
          </Box>
          <Box
            marginTop="4.62vh"
            width="100%"
          >
          <Grid container justifyContent="center" rowSpacing={8} columnSpacing={7}>
            {projectIndex.map((number) => (
            <ProjectCard
              index={number}
              everything={selectEverything}
              confidential={false}
            />
            ))}
            {selectEverything &&
              <ProjectCard
                index={14}
                confidential
            />}
          </Grid>
          <Box
            display={selectEverything ? "none" : "flex"}
            justifyContent="center"
          >
            <BootstrapButton
              sx={{
                marginTop:"10.09vh"
              }}
              variant="contained"
              onClick={() => {
                setSelectEverything(true);
                setProjectType("");
              }}
            >
              See Everything
            </BootstrapButton>
          </Box>
        </Box>
      </Box>
    </div>
)}