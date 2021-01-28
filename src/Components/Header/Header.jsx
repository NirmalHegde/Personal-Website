//React/Material UI Libraries
import React from 'react';
import { useMediaQuery, AppBar, Toolbar, Typography, Tab, Tabs } from '@material-ui/core';


//File Imports
import HeaderStyles from "./HeaderStyles";

//header section of website
const Header = () => {

    const classes = HeaderStyles(); //gains styles from HeaderStyles.jsx
    const desktop = useMediaQuery('(min-width: 900px)');
    const mobile = useMediaQuery('(max-width: 900px)');

    const [state, setState] = React.useState({left: false});

    const toggleDrawer = (anchor, open) => (event) => {
        
    }

    return (
        <AppBar className={classes.root} position="static"> {/*Static ensures header is always visible*/}
            <Toolbar>
                <Typography>NH</Typography>
                <div className={classes.title}></div>
                {desktop && <>
                    <Tabs aria-label="simple tabs example">
                        <Tab label="Home" />
                        <Tab label="About" />
                        <Tab label="Projects" />
                        <Tab label="Resume" />
                        <Tab label="Contact" />
                    </Tabs>
                </>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;


