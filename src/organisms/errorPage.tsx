
import React from "react";
import Error from "../svgimages/error";
import { Grid, Typography } from "@mui/material";
import Button from "../atoms/button";

export interface ErrorPageProps {
    heading: string;
    info: string;
}

const ErrorPage = ({ heading, info }: ErrorPageProps) => {

    const styles = {

        grid: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column' as 'column',
            padding: '0px',
            gap: '80px',
            position: 'absolute' as 'absolute',
            height: '536.75px',
            width: '726px',
            left: '357px',
            top: '116px',
        },

        image: {
            height: '256.75px',
            width: '400px',
        },

        textGrid: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column' as 'column',
            padding: '0px',
            gap: '24px',
            height: '112px',
            width: '726px',
        },

        heading: {
            width: '756px',
            height: '64px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '58px',
            lineHeight: '100%',
            textTransform: 'uppercase' as 'uppercase',
            /* or 64px */
            color: '#000000',
        },

        info: {
            width: '508px',
            height: '24px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '24px',
            lineHeight: '100%',
            color: '#000000',
        },

        button:{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row' as 'row',
            justfyContent: 'center',
            padding: '16px 32px',
            gap:'10px',
            width: '171px',
            height: '48px',
        },
    };

    return (

        <Grid style={styles.grid}>
            <Grid style={styles.image}> <Error /> </Grid>
            <Grid style={styles.textGrid}>
                <Typography style={styles.heading}>{heading}</Typography>
                <Typography style={styles.info}>{info}</Typography>
                <Grid style={styles.button}><Button text='GO BACK' backgroundColor="#01487E" /></Grid>
            </Grid>
        </Grid>
    );

};

export default ErrorPage;