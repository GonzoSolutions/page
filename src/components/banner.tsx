//
// banner.tsx
//

//import React from 'react';
import * as Material from '@mui/material';

//
//

import LogoImage from "../assets/logo.svg";

//
//

export default ({ primary, secondary, slogan }: { primary: string, secondary: string, slogan: string }) => {
    return (
        <Material.Grid container size={3} sx={{ position: 'relative' }}>
            <Material.Grid size="grow">
            </Material.Grid>
            <Material.Grid size={5} textAlign="center" sx={{ width: '100%', height: '100%', padding: '1.5em 0' }}>
                <Material.Box component="img" src={LogoImage} />
                <Material.Box>
                    <Material.Typography variant="h4" textTransform='uppercase' lineHeight={1}>
                        {primary}
                    </Material.Typography>
                    <Material.Typography variant="h4" textTransform='uppercase' lineHeight={1}>
                        {secondary}
                    </Material.Typography>
                </Material.Box>
                <Material.Box>
                    <Material.Typography variant="h6" lineHeight={2} textTransform='uppercase'>
                        {slogan}
                    </Material.Typography>
                </Material.Box>
            </Material.Grid>
            <Material.Grid size="grow">
            </Material.Grid>
        </Material.Grid>
    )
};