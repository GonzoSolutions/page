//
// footer.tsx
//

import * as Material from "@mui/material";

//
//

export default ({ copyright }: { copyright: string }) => {
    return (
        <Material.Grid container size={3} sx={{ background: '#060606' }}>
            <Material.Grid size="grow">
            </Material.Grid>

            <Material.Grid size={{ xs: 6 }}>
                <Material.Box textAlign="center" fontSize="0.8em" sx={{ margin: 0, padding: '1em' }}>
                    &copy; 2025 {copyright} 
                </Material.Box>
            </Material.Grid>

            <Material.Grid size="grow">
            </Material.Grid>
        </Material.Grid>
    );
}