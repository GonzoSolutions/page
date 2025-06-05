//
// desc.tsx
//

import * as Material from '@mui/material';

//
//

export default ({ text }: { text: string }) => {
    return (
        <Material.Grid container spacing={2} sx={{ background: '#060606', margin: 0, padding: '1em', fontFamily: 'Oxanium' }}>
            <Material.Grid size="grow">
            </Material.Grid>

            <Material.Grid size={{ xs: 12, sm: 10, md: 10, lg: 4 }}>
                <Material.Typography variant="body1" textAlign="center">
                    {text}
                </Material.Typography>
            </Material.Grid>

            <Material.Grid size="grow">
            </Material.Grid>
        </Material.Grid>
    )
};