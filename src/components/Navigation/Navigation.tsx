import React, {FC, useState} from "react";
import {NavLink} from "react-router-dom";
import {useNavigationStyles} from "./navigation.style";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import {Typography} from "@material-ui/core";

const links = [
    {to:'/game', label:"Game", icon:<SportsEsportsIcon/>},
    {to:'/stats', label:"Statistics", icon:<EqualizerIcon/>},
    {to:'/dict', label:"My Dictionary", icon:<MenuBookIcon/>},

]

export const Navigation:FC = () => {
    const classes = useNavigationStyles();
    const [newActiveLink, setNewActiveLink] = useState(-1);

    return (
        <nav className={classes.root}>
            {
                links.map((link,index) => (
                    <NavLink
                        className={classes.navLink}
                        to={link.to}
                        key={link.to}
                        isActive={(match) => {
                            match && setNewActiveLink(index);
                            return !!match;
                        }}
                    >
                        {
                            React.cloneElement(link.icon,{
                                    color:newActiveLink === index ? 'primary' : 'inherit'
                                }
                            )
                        }
                        <Typography
                            color={newActiveLink === index ? 'primary' : 'inherit'}
                           >
                            {link.label}
                        </Typography>
                    </NavLink>
                ))
            }
        </nav>
    )

}
