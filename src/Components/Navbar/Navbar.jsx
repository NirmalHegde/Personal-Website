//React/Material UI Libraries
import React from 'react';
import { useMediaQuery, AppBar, Toolbar, Typography, Tab, Tabs, IconButton, Drawer } from '@material-ui/core';
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';


//File Imports
import NavbarStyles from "./NavbarStyles";

//header section of website
const Navbar = () => {

    const classes = NavbarStyles(); //gains styles from HeaderStyles.jsx
    const desktop = useMediaQuery('(min-width: 900px)');
    const mobile = useMediaQuery('(max-width: 900px)');

    const [state, setState] = React.useState({ left: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const [background, setBackground] = React.useState('navbarTransparent')
    const navRef = React.useRef();
    navRef.current = background;
    React.useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 0.1;
            if (show) {
                setBackground('navbarSolid');
            } else {
                setBackground('navbarTransparent');
            }
        }
        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div>
            <AppBar elevation={0} className={classes[navRef.current]}> {/*Static ensures header is always visible*/}
                <Toolbar>
                    <Typography className={classes.initials}>NH.</Typography>
                    <div className={classes.space} />
                    {desktop && <>
                        <Tabs textColor="primary" aria-label="tabs">
                            <Link smooth="true" duration={1000} to="home">
                                <Tab className={classes.tabs} label="Home" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="about">
                                <Tab className={classes.tabs} label="About" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="projects">
                                <Tab className={classes.tabs} label="Projects" />
                            </Link>
                            <Link smooth="true" duration={1000} offset={-70} to="contact">
                                <Tab className={classes.tabs} label="Contact" />
                            </Link>
                        </Tabs>
                    </>}
                    {mobile && <>
                        <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
                            <MenuIcon className={classes.icon} />
                        </IconButton>
                        <Drawer variant='temporary' anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                            <div
                                role="presentation"
                                onClick={toggleDrawer("left", false)}
                                onKeyDown={toggleDrawer("left", false)}
                            >
                                <Tabs textColor="primary" orientation="vertical">
                                    <Link smooth="true" duration={1000} to="home">
                                        <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Home" />
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-70} to="about">
                                        <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="About" />
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-70} to="projects">
                                        <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Projects" />
                                    </Link>
                                    <Link smooth="true" duration={1000} offset={-70} to="contact">
                                        <Tab onClick={toggleDrawer("left", false)} className={classes.tabs} label="Contact" />
                                    </Link>
                                </Tabs>
                            </div>
                        </Drawer>
                    </>}

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;


