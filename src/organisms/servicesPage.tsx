
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
import s1 from "../stories/assets/s1.svg";
import s2 from "../stories/assets/s2.svg";

export interface ErrorPageProps {
  heading: string;
  info: string;
}

const ServicesPage: React.FC = () => {



  return (
    <>
      <Grid container direction={'column'} alignContent={'center'} >
        <Grid item><Navbar /></Grid>
        <Grid item> <TabDisplay image={image14}
          heading='Services that we provide'
          info='With extensive expertise and up-to-date tools, our experienced cybersecurity team safeguards your digital assets. We prioritize affordable and efficient solutions, recognizing cybersecurity significance for businesses, regardless of their scale.'
        /></Grid>

        <Grid item >
          <Grid container px={15} py={6} flexDirection={"column"} >
            <Grid item xs={12} md={4} px={0}>
              <Typography sx={{
                fontFamily: 'Roboto, sans-serif', fontWeight: '700',
                fontSize: '40px',
                lineHeight: '40px',
                textAlign: 'center',
                margin: ''
              }}>How we Work? </Typography>
            </Grid>
            <Grid item style={{ margin: 0 }}>
              <Grid container style={{padding : '80px 63px 80px 200px'}} flexDirection={"row"} columnGap={17} rowGap={10}>
                <Grid item>
                  <TextGrid heading={"Get Ideas"} info={"Get Ideas is a service that sparks creativity and drives innovation. It offers a wide range of inspiring concepts to help individuals and businesses overcome creative blocks, explore new possibilities, and generate fresh perspectives."} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Collabrate with team"} info={"Boost team collaboration and productivity with our streamlined service. Achieve seamless coordination and effective communication for successful project outcomes. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Design Creative"} info={"Design Creative offers cutting-edge design services that ignite creativity and bring visions to life. Their team of skilled professionals excels in crafting captivating visual designs and user-friendly interfaces, enabling businesses to make a lasting impression and engage their target audience effectively. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Get Client Feedback"} info={"Collect valuable client feedback effortlessly with our service, empowering data-driven decisions and continuous improvement. Enhance your business strategies and drive customer satisfaction with our powerful Get Client Feedback solution."} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <PhotoGrid />
        </Grid>

        <Grid item >
          <Grid container px={15} py={15} flexDirection={"column"} >
            <Grid item xs={12} md={4} px={0}>
              <Typography sx={{
                fontFamily: 'Roboto, sans-serif', fontWeight: '700',
                fontSize: '40px',
                lineHeight: '48px',
                textAlign: 'center',
                margin: ''
              }}>Cyber Security</Typography>
            </Grid>
            <Grid item style={{ margin: 0 }}>
              <Grid container style={{padding : '80px 63px 80px 200px'}}  flexDirection={"row"} columnGap={17} rowGap={10}>
                <Grid item>
                  <TextGrid heading={"Vulnerability Assessment"} info={"A systematic process of identifying vulnerabilities in a system, network, or application, which can help prevent cyber-attacks and improve overall security posture. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Secure Code Review"} info={"A methodical analysis of the source code to identify vulnerabilities and weaknesses that can be exploited by attackers, which can help improve the overall security of the application. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Managed Security Services"} info={"A comprehensive approach to managing and monitoring an organization's security infrastructure, which can help reduce the risk of cyber-attacks and ensure timely detection and response to threats."} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Compliance"} info={"A comprehensive approach to managing and monitoring an organization's security infrastructure, which can help reduce the risk of cyber-attacks and ensure timely detection and response to threats."} />
                </Grid>
                <Grid item style = {{ marginLeft : '-48px' ,}} md={'auto'}>
                  <img src={s1}/>
                </Grid>
                <Grid item>
                  <TextGrid heading={"Cybersecurity Awareness Training "} info={"A comprehensive approach to managing and monitoring an organization's security infrastructure, which can help reduce the risk of cyber-attacks and ensure timely detection and response to threats. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Penetration Testing"} info={"A simulated attack on a system or application to identify vulnerabilities and weaknesses that can be exploited by attackers, which can help improve the overall security posture and identify areas for improvement. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Operating System Hardening"} info={"The process of configuring an operating system to reduce its attack surface and improve its overallsecurity, which can help prevent unauthorized access and protect sensitive data. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Cloud Security"} info={"Cloud security involves protecting data and applications stored in your cloud environments from unauthorized access, theft, or damage. "} />
                </Grid>
                <Grid item style = {{ marginLeft : '-48px' ,}} md={'auto'}>
                  <img src={s2}/>
                </Grid>
                <Grid item>
                  <TextGrid heading={"24*7 Risk Management"} info={"24*7 risk management is a continuous process that involves identifying potential threats, assessing their likelihood and impact on infrastructure, and taking measures to mitigate or avoid them at all times. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Biometric Authentication"} info={"Biometric authentication is a security measure that uses unique physical characteristics, such as fingerprints or facial recognition, to verify the identity of an individual in an organization. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Digital Risk Protection"} info={"Digital Risk Protection is robust technology that scans the internet, analyzes potential threats and detects phishing threats, online brand abuse to prevent infringement or impersonation. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"DLP (Data Loss Prevention) Solution"} info={"DLP solution is designed to prevent sensitive data from being lost, stolen, or mishandled by monitoring and controlling its flow both within and outside an organization's network. "} />
                </Grid>
                <Grid item>
                  <TextGrid heading={"Incident Response"} info={"Incident response is a structured approach to managing and responding to cybersecurity incidents, including identifying and containing the issue, investigating its cause, and restoring normal operations as quickly as possible."} />
                </Grid>
              </Grid>
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

export default ServicesPage;