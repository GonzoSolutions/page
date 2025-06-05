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

export default () => {
    return (
        <Material.Grid container size={3} sx={{ position: 'relative' }}>
            <Material.Grid size="grow">
            </Material.Grid>
            <Material.Grid size={5} textAlign="center" sx={{ width: '100%', height: '100%' }}>
                <Material.Box component="img" src={LogoImage} />
                <Material.Box>
                    <Material.Typography variant="h5" lineHeight={1}>
                        GONZO
                    </Material.Typography>
                    <Material.Typography variant="h5" lineHeight={1}>
                        SOLUTIONS
                    </Material.Typography>
                </Material.Box>
                <Material.Box>
                    <Material.Typography variant="body2" lineHeight={6}>
                        WE PUT HUMANS BACK IN THE LOOP
                    </Material.Typography>
                </Material.Box>
            </Material.Grid>
            <Material.Grid size="grow">
            </Material.Grid>
        </Material.Grid>
    )
};