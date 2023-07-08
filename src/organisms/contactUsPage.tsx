
import React from "react";
import Error from "../svgimages/error";
import { Grid, Typography } from "@mui/material";
import Button from "../atoms/button";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
import PhotoGrid from "../molecules/photogrid";
import TabDisplay from "../molecules/tabDisplay";
import rafiki from "../stories/assets/rafiki.svg"
import TextGrid from "../molecules/textgrid";
import TextFieldGrid from "../molecules/textFieldGrid";

export interface ErrorPageProps {
  heading: string;
  info: string;
}

const ContactUsPage: React.FC = () => {



  return (
    <>
      <Grid container direction={'column'} alignContent={'center'} rowGap={10}>
        <Grid item><Navbar /></Grid>
        <Grid item> <TabDisplay image={rafiki}
          heading='Let’s create the next together'
          info='Contact us today to learn more about our services and how we can help protect your business from cyber threats.'
        /></Grid>
        <Grid item >
          <Grid container px={15} py={6} flexDirection={"column"} >
            <Grid item xs={12} md={4} px={0}>
              <Typography sx={{
                fontFamily: 'Roboto, sans-serif', fontWeight: '700',
                fontSize: '40px',
                lineHeight: '48px',
                textAlign: 'center',
                margin: ''
              }}>Your Details </Typography>
            </Grid>
            <Grid item style={{ margin: 0 }}>
              <Grid container px={18} py={10} flexDirection={"row"} columnGap={13.5} rowGap={10}>
                <Grid item>
                  <TextFieldGrid heading={"Name"} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={""} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={"Email"} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={"Phone"} />
                </Grid>
              </Grid>
            </Grid>
            
          </Grid>
          
        </Grid>
        <Grid item>
          <PhotoGrid />
        </Grid>
        <Grid item >
          <Grid container px={15} py={6} flexDirection={"column"} >
            <Grid item xs={12} md={4} px={0}>
              <Typography sx={{
                fontFamily: 'Roboto, sans-serif', fontWeight: '700',
                fontSize: '40px',
                lineHeight: '48px',
                textAlign: 'center',
                margin: ''
              }}>Some Other Details </Typography>
            </Grid>
            <Grid item style={{ margin: 0 }}>
              <Grid container px={18} py={10} flexDirection={"row"} columnGap={13.5} rowGap={10}>
                <Grid item>
                  <TextFieldGrid heading={"Website"} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={"Customer"} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={"Deadline"} />
                </Grid>
                <Grid item>
                  <TextFieldGrid heading={"SkypeId"} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} px={15} style={{margin:0}}>
              <Button text={"SEND ENQUIRY"} backgroundColor="#01487E" color="#FFFFFF" />
            </Grid>
          </Grid>
          
        </Grid>
       

        {/* <StyledBox>
          
            <Grid container p={5} justifyContent={'space-between'} alignItems={'center'} width={100} >
              <Grid item> uabfkjsoklsndsljgopadjg
              </Grid>
              <Grid item>
                gopidi
              </Grid>
            </Grid>
          </StyledBox> */}
        <Grid item>
          <Footer />

        </Grid>
      </Grid>
    </>
  );

};

export default ContactUsPage;