//
// banner.tsx
//

import React from 'react';

import * as Material from '@mui/material';

//
//

import "./banner.css";

//
//

import LogoImage from "./assets/logo.svg";

//
//

const Logo = ({ image }: { image: string }) => {
    return <Material.Box> <img src={image} /> </Material.Box>
}

const Name = ({ primary, secondary }: { primary: string, secondary: string }) => {
    return (
        <Material.Box>
            <Material.Box>
                {primary}
            </Material.Box>
            <Material.Box>
                {secondary}
            </Material.Box>
        </Material.Box>
    );
}

const Slogan = ({ text }: { text: string }) => {
    return <Material.Box> {text} </Material.Box>
}

//
//

export default () => {
    return (
        <Material.Grid container size={3} id="banner" sx={{ position: 'relative' }}>
            <Material.Grid size="grow"></Material.Grid>
            <Material.Grid size={5} alignItems="center" sx={{ position: 'relative', width: '100%', height: '100%' }}>
                <Material.Box id="logo">
                    <Logo image={LogoImage} />
                </Material.Box>
                <Material.Box id="name">
                    <Name primary="GONZO" secondary="SOLUTIONS" />
                </Material.Box>
                <div id="slogan">
                    <Slogan text="WE PUT HUMANS BACK IN THE LOOP" />
                </div>
            </Material.Grid>
            <Material.Grid size="grow"></Material.Grid>
            <Material.Box sx={{ position: 'absolute', background: 'rgba(0,0,0,0.0)', width: '100%', height: '100%' }} />
        </Material.Grid>
    )
};