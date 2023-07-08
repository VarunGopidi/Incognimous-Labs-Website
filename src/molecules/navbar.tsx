import React from "react";
import { AppBar, Avatar, Box, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { JsxElement } from "typescript";
import Logo from "../svgimages/icon";
import Title from "../svgimages/title";
import Button from "../atoms/button";
import header from "../stories/assets/Group 1.svg";
import MenuIcon from "../stories/assets/Menu.svg";
import { useNavigate } from 'react-router-dom';
interface AppbarProps {
    Title: String;

};
const styles = {

    header: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '1440px',
        height: '96px',
        padding: '24px 120px',
        gap: '10px',
        position: 'absolute' as 'absolute',
    },

    innerGrid: {
        display: 'flex',
        aligItems: 'center',
        flexDirection: 'row' as 'row',
        padding: '0px',
    },

    titleGrid: {
        width: '240px',
        height: '40px',
    },

    logo: {
        position: 'absolute' as 'absolute',
        left: '0%',
        right: '95.96%',
        top: '0%',
        bottom: '24.64%',
    },

    tabGrid: {
        display: 'flex',
        aligItems: 'center',
        flexDirection: 'row' as 'row',
        padding: '0px',
        gap: '40px',
        width: '551px',
        height: '48px',
    },

    tabs: {
        fontFamily: 'Roboto, sans-serif',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '19px',
        /* or 64px */
        color: '#01487E',
    },

    button: {
        display: 'flex',
        aligItems: 'center',
        flexDirection: 'row' as 'row',
        alignItems: 'center',
        padding: '0px 32px',
    },
}


const Navbar: React.FC = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const history = useNavigate();

    const handleServices = () => {
        history('/services');
    };

    const handleProcess = () => {
        history('/process');
    };

    const handleContact = () => {
        history('/contactus');
    };

    const handleHome = () => {
        history('/');
    };

    return (
        // <Grid style={styles.header}>
        //     <Grid style={styles.innerGrid}>
        //         <Grid style={styles.titleGrid}>
        //             <Grid style={styles.logo}><Logo /></Grid>
        //             <Grid style={styles.title}><Title /></Grid>
        //         </Grid>
        //         <Grid style={styles.tabGrid}>
        //             <Typography style={styles.tabs} >Services</Typography>
        //             <Typography style={styles.tabs} >Work</Typography>
        //             <Typography style={styles.tabs} >Process</Typography>
        //             <Typography style={styles.tabs} >Resources</Typography>
        //             <Grid style={styles.button}><Button text='CONTACT US' backgroundColor="#FFFFFF" color="#01487E"></Button></Grid>

        //         </Grid>
        //     </Grid>
        // </Grid>
        <>
            <Grid container display={{ xs: 'none', md: 'flex' }} direction={'row'} alignItems={"center"} justifyContent={'space-between'} px={12} py={2.5}>
                <Grid item>
                    <Grid container alignItems={"center"} columnGap={1.1}>
                        <Grid item onClick={handleHome}><img src={header} /></Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container alignItems={"center"} columnGap={5}>
                        <Grid item onClick={handleServices}>
                            <Typography style={styles.tabs}>Services</Typography></Grid>
                            <Grid item onClick={handleProcess}>
                            <Typography style={styles.tabs}>Processes</Typography></Grid>
                        {/* <Grid item><Typography style={styles.tabs} >Work</Typography></Grid>
                        <Grid item><Typography style={styles.tabs} >Process</Typography></Grid> */}
                        <Grid item><Button text='CONTACT US' backgroundColor="#FFFFFF" onClick={handleContact}></Button></Grid>
                    </Grid>
                </Grid>
            </Grid>


            <Grid container display={{ xs: 'flex', md: 'none' }} direction={'row'} alignItems={"center"} justifyContent={'space-between'}>
                <Grid item>
                    <Grid container alignItems={"center"} columnGap={1.1}>
                        <Grid item><img src={header} /></Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div>
                        <IconButton
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <img src={MenuIcon} />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleServices}><Typography style={styles.tabs} >Services</Typography></MenuItem>
                            {/* <MenuItem onClick={handleClose}><Typography style={styles.tabs} >Work</Typography></MenuItem>
                            <MenuItem onClick={handleClose}><Typography style={styles.tabs} >Process</Typography></MenuItem> */}
                            <MenuItem onClick={handleContact}><Button text='CONTACT US' backgroundColor="#FFFFFF" color="#FFFFFF"></Button></MenuItem>
                        </Menu>

                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default Navbar;