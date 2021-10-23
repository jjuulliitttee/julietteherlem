import * as React from 'react';
import { Input, styled, TextField, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { Theme, Grid } from "@mui/material";
import { Box } from "@mui/system"
import iconInstagram from './assets/Group 7.svg'
import iconLinkedin from './assets/Group 8.svg'
import iconPhone from './assets/Group.svg'
import iconMail from './assets/Group-1.svg'
import { useRef, useState } from "react";
import { BootstrapButton } from "./components/MyButton";
import emailjs from 'emailjs-com';
import thankYouPicDark from './assets/ThankYouPicDark.png';
import thankYouPicLight from './assets/ThankYouPicLight.png';
import { useDarkMode } from 'usehooks-ts';

//import InputUnstyled, { InputUnstyledProps } from '@mui/core/InputUnstyled';

export interface ContactMeProp {}

const Img = styled('img')({
  objectFit: 'contain',
  alignSelf: 'end',
  right: '0px',
  position: 'absolute',
});

interface FormValues {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
}

/*const defaultValues: FormValues =  {
  name: "",
  subject: "",
  email: "",
  message: ""
}*/

const defaultValues = {
  name: "",
  subject: "",
  email: "",
  message: ""
}

/*const CustomField = styled(Input)((theme: Theme) => ({
  width: '200px',
  background: theme.palette.mode === 'dark' ? '#FFFFFF' : '#1E2E68',
  borderRadius: "25px",
}));*/

/*const CustomInput = React.forwardRef((
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) => 
    <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref} />
);*/

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      background: theme.palette.mode === "dark" ? "#010513" : "#F3F5FC",
      minHeight: "100vh",
      display: 'flex'
    },
    formInput: {
      paddingTop: "21px",
      paddingBottom: "14px",
      paddingLeft: "31px",
      borderRadius: "25px",
      boxShadow: "2px 2px 9px rgba(0, 0, 0, 0.25)",
      background: theme.palette.mode === 'dark' ? '#1E2E68' : '#FFFFFF',
      fontSize: "22px",
      fontWeight: 500,
      lineHeight: "26px",
      display:"block"
    }
  }));

export const ContactMe: React.FC<ContactMeProp> = () => {
    const {isDarkMode} = useDarkMode();
    const classes = useStyles();
    const [formValues, setFormValues] = useState(defaultValues);
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log(e.target.value);
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    const handleSubmit = (event: React.SyntheticEvent) => {
      event.preventDefault();
      emailjs.send("service_nivkbc6", "template_19j9c6s", formValues, "user_nEcYvdvpjW6MnSgXn82HH")
    };

    return (
    <div
      className={classes.root}
      id="contact"
    >
     <Box
          paddingLeft="135px"
          paddingRight="429px"
          paddingTop="223px"
          paddingBottom="231px"
          width="100%"
          display="flex"
      >
        <Grid container justifyContent="space-between" direction="row">
                <Grid item  xs={6} container direction="column" spacing={1}>
                  <Grid item>
                      <Typography style={{lineHeight:"66px", fontSize:"50px"}} variant='body1'>
                        Get in touch !
                      </Typography>
                  </Grid>
                  <Grid item >
                      <Typography style={{lineHeight:"33px"}} variant='subtitle1' gutterBottom>
                        If you have any inquiries,<br/> I would be happy to hear you !
                      </Typography>
                  </Grid>
                  <Grid item container spacing={1}>
                    <Grid item>
                      <img alt="linkedin-logo" src={iconLinkedin} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="instagram-logo" src={iconInstagram} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="phone-logo" src={iconPhone} width={31.4} height={31.4}/>
                    </Grid>
                    <Grid item>
                      <img alt="mail-logo" src={iconMail} width={31.4} height={31.4}/>
                    </Grid>
                  </Grid>
                </Grid>
                  <Grid item container xs={6} direction="column">
                    <form>
                      <Grid item  container columnSpacing={6} >
                        <Grid item xs={6}>
                          <Input
                              id="name-input"
                              name="name"
                              placeholder="Your name"
                              type="text"
                              value={formValues.name}
                              onChange={handleInputChange}
                              disableUnderline
                              className={classes.formInput}
                            />
                        </Grid>
                        <Grid item xs={6}>
                          <Input
                              id="email-input"
                              name="email"
                              placeholder="Email adresse"
                              type="email"
                              value={formValues.email}
                              onChange={handleInputChange}
                              disableUnderline
                              className={classes.formInput}
                            />
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Input
                            id="subject-input"
                            name="subject"
                            placeholder="Subject"
                            value={formValues.subject}
                            onChange={handleInputChange}
                            disableUnderline
                            className={classes.formInput}
                            style={{marginTop: "30px"}}
                          />
                      </Grid>
                      <Grid item>
                        <Input
                            id="message-input"
                            name="message"
                            placeholder="Message"
                            value={formValues.message}
                            onChange={handleInputChange}
                            disableUnderline
                            className={classes.formInput}
                            style={{marginTop: "30px"}}
                            multiline
                            rows={9}
                          />
                      </Grid>
                      <BootstrapButton
                          style={{backgroundColor: "#ED4CEE", marginTop:"65px"}}
                          variant="contained"
                          onClick={handleSubmit}
                          type="submit"
                        >
                          Submit
                      </BootstrapButton>
                    </form>
                  </Grid>
            </Grid>
        </Box>
        {isDarkMode ? <Img alt="thankYouDark" src={thankYouPicDark} width="490px" height="276px"/> :
        <Img alt="thankYouLight" src={thankYouPicLight} width="490px" height="276px"/>
        }
    </div>
  )}