//
// banner.tsx
//

import * as Material from '@mui/material';

//
//

import "./banner.css";

//
//

import LogoImage from "./assets/logo.svg";

//
//

const Logo = ({ image }) => {
    return <Material.Box> <img src={image} /> </Material.Box>
}

const Name = ({ primary, secondary }) => {
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

const Slogan = ({ text }) => {
    return <Material.Box> {text} </Material.Box>
}

//
//

export default () => {
    return (
        <Material.Grid container size={3} id="banner">
            <Material.Grid size="grow"></Material.Grid>
            <Material.Grid size={5} alignItems="center" sx={{ width: '100%', height: '100%' }}>
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
        </Material.Grid>
    )
};