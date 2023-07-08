import { Grid, Typography } from "@mui/material";
import React from "react";

export interface TabDisplayProps {
    image?: string;
    heading?: string;
    info?: string;
};

const TabDisplay = ({ image, heading, info }: TabDisplayProps) => {

    const styles = {

        grid: {
            display: 'flex',
            aligItems: 'center',
            flexDirection: 'row' as 'row',
            padding: '0px',
            gap: '80px',
            position: 'absolute' as 'absolute',

        },

        innerGrid: {
            width: '500px',
            height: '400px',
        },

        infoGrid: {
            display: 'flex',
            aligItems: 'flex-start',
            flexDirection: 'column' as 'column',
            padding: '0px',
            gap: '40px',
            position: 'absolute' as 'absolute',
            left: '580x',
            top: '95px',
        },

        heading: {
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '66px',
            lineHeight: '100%',
            /* or 64px */
            color: '#000000',
            padding: '0px 0px 16px 0px',
        },

        info: {
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '16px',
            lineHeight: '150%',
            /* or 64px */
            color: '#666666',
            padding: '0px 0px 56px 0px',
        },

    };

    return (
        <Grid container direction={{ md: 'row', xs: 'column' }} rowGap={10} justifyContent={'space-around'} py={10} px={5}>
            <Grid item xs={12} md={'auto'} style={{ margin: 0 , padding: '0 0 0 160px'}}>
                <img src={image} />
            </Grid>
            <Grid item xs={12} md={6} px={0} style={{ margin: '10px' , padding: '0 20px 0 136px' }}>
                <Typography style={styles.heading}>{heading}</Typography>
                <Typography style={styles.info}>{info}</Typography>
            </Grid>
        </Grid>
    );


};

export default TabDisplay;