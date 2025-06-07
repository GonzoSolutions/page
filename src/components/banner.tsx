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
            <Material.Grid size={5} textAlign="center" sx={{ width: '100%', height: '100%' }}>
                <Material.Box component="img" src={LogoImage} />
                <Material.Box>
                    <Material.Typography variant="h5" textTransform='uppercase' lineHeight={1}>
                        {primary}
                    </Material.Typography>
                    <Material.Typography variant="h5" textTransform='uppercase' lineHeight={1}>
                        {secondary}
                    </Material.Typography>
                </Material.Box>
                <Material.Box>
                    <Material.Typography variant="body2" lineHeight={6} textTransform='uppercase'>
                        {slogan}
                    </Material.Typography>
                </Material.Box>
            </Material.Grid>
            <Material.Grid size="grow">
            </Material.Grid>
        </Material.Grid>
    )
};