
import React from "react";
import Error from "../svgimages/error";
import { Grid, Typography } from "@mui/material";
import Button from "../atoms/button";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
import HomeSlider from "../molecules/homeSlider";
import PhotoGrid from "../molecules/photogrid";
import TabDisplay from "../molecules/tabDisplay";
import image14 from "../stories/assets/image 14.svg";
import TextGrid from "../molecules/textgrid";
import p1 from "../stories/assets/p1.svg";
import p2 from "../stories/assets/p2.svg";

export interface ErrorPageProps {
  heading: string;
  info: string;
}

const ProcessPage: React.FC = () => {



  return (
    <>
      <Grid container direction={'column'} alignContent={'center'} >
        <Grid item><Navbar /></Grid>
        <Grid item> <TabDisplay image={p1}
          heading='5D process which help us to grow'
          info='With extensive expertise and up-to-date tools, our experienced cybersecurity team safeguards your digital assets. We prioritize affordable and efficient solutions, recognizing cybersecurity significance for businesses, regardless of their scale.'
        /></Grid>

<Grid item >
          <Grid container px={15} py={6} flexDirection={"column"} >
            <Grid item xs={12} md={4} px={0}>
              <Typography sx={{
                fontFamily: 'Roboto, sans-serif', fontWeight: '700',
                fontSize: '40px',
                // lineHeight: '40px',
                textAlign: 'center',
                margin: '0'
              }} noWrap>Why Choose Us?</Typography>
            </Grid>
            <Grid item style={{ margin: 0 }}>
              <Grid container style={{padding : '80px 63px 80px 200px'}} flexDirection={"row"} columnGap={17} rowGap={10}>
                <Grid item>
                  <TextGrid heading={"Expertise"} info={" Our team of cybersecurity experts has extensive experience in protecting organizations against various cyber threats."} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Customization"} info={"We understand that every organization is unique, and we tailor our solutions to meet your specific security requirements and budget constraints."} />
                </Grid>
                <Grid item style = {{ marginLeft : '-48px' ,}} md={'auto'}>
                  <img src={p2}/>
                </Grid>
                <Grid item>
                  <TextGrid heading={"Proactive Approach"} info={"We take a proactive approach to cybersecurity, provide real-time alerts and regular reports to keep you informed about the security status of your organization."} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Customer Support"} info={"We prioritize customer satisfaction and provide timely and responsive support to address any security concerns or questions you may have. Our team is available 24/7 to assist you with any cybersecurity needs."} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <PhotoGrid />
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

export default ProcessPage;