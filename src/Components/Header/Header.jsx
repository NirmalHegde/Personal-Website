//React/Material UI Libraries
import React from 'react';
import { useMediaQuery, AppBar, Toolbar, Typography, Tab, Tabs, IconButton, List, ListItemText, ListItem, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


//File Imports
import HeaderStyles from "./HeaderStyles";

//header section of website
const Header = () => {

    const classes = HeaderStyles(); //gains styles from HeaderStyles.jsx
    const desktop = useMediaQuery('(min-width: 900px)');
    const mobile = useMediaQuery('(max-width: 900px)');

    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <AppBar className={classes.root} position="static"> {/*Static ensures header is always visible*/}
            <Toolbar>
                <Typography className={classes.initials}>NH.</Typography>
                <div className={classes.space}></div>
                {desktop && <>
                    <Tabs aria-label="tabs">
                        <Tab className={classes.tabs} label="Home" />
                        <Tab className={classes.tabs} label="Projects" />
                        <Tab className={classes.tabs} label="Resume" />
                        <Tab className={classes.tabs} label="Contact" />
                    </Tabs>
                </>}
                {mobile && <>
                    <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Drawer variant='temporary' anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                        <div
                        role="presentation"
                        onClick={toggleDrawer("left", false)}
                        onKeyDown={toggleDrawer("left", false)}
                        >
                            <List>
                                <Tabs orientation="vertical">
                                    <Tab className={classes.list} label={<div> Home </div>} />
                                    <Tab className={classes.list} label={<div> Projects </div>} />
                                    <Tab className={classes.list} label={<div> Resume </div>} />
                                    <Tab className={classes.list} label={<div> Contact </div>} />
                                </Tabs>
                            </List>
                        </div>
                    </Drawer>
                </>}

            </Toolbar>
        </AppBar>
    );
};

export default Header;


