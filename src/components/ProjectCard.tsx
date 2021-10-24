import React, { useState } from "react";

import Box, { BoxProps } from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ProjectType } from "../entities/ProjectType";
import projects from "../constants/projects";
import { Grid } from "@mui/material";

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
    const props = {index, confidential};
    const classes = useStyles(props);
  return (
    <Grid item xs={3}>
      <Box
        onMouseEnter={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        sx={{
          height: "257px",
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
    </Grid>
  );
};
