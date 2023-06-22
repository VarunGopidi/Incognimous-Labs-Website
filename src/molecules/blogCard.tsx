import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "../atoms/button";

export interface BlogCardProps {
    heading?: string;
    info?: string;
    image?: React.ReactNode;
    date?: string;
};

const BlogCard = ({ image, heading, info, date }: BlogCardProps) => {

    const styles = {

        grid: {
            display: 'flex',
            aligItems: 'flex-start',
            flexDirection: 'column' as 'column',
            padding: '0px',
            height: '416px',
            width: '320px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12',
            borderRadius: '10px',
        },

        imageGrid: {
            height: '200px',
            width: '320px',
        },

        infoGrid:{
            display: 'flex',
            aligItems: 'flex-start',
            flexDirection: 'column' as 'column',
            padding: '24px',
            gap: '40px',
            height: '216px',
            width: '320px',
        },

        textGrid: {
            display: 'flex',
            aligItems: 'flex-start',
            flexDirection: 'column' as 'column',
            padding: '0px',
            gap: '16px',
            height: '112px',
            width: '272px',
        },

        heading:{
            width: '208px',
            height: '24px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '100%',
            color: '#000000',
        },

        info: {
            width: '242px',
            height: '72px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '150%',
            /* or 64px */
            color: '#666666',
        },

        date:{
            width: '84px',
            height: '16px',
            fontFamily: 'Roboto, sans-serif',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '100%',
            color: '#666666',
        },

    };

    return (
        <Grid style={styles.grid}>
            <Grid style={styles.imageGrid}>{image}</Grid>
            <Grid style={styles.infoGrid}>
                <Grid style={styles.textGrid}>
                    <Typography style={styles.heading}>{heading}</Typography>
                    <Typography style={styles.info}>{info}</Typography>
                </Grid>
                <Typography style={styles.date}>{date}</Typography>
            </Grid>
        </Grid>
    );

};

export default BlogCard;