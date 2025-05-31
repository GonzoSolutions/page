//
// team.tsx
//

import * as Material from '@mui/material';

//
//

import "./team.css";

//
//

export default function Team() {
    const members = [
        { id: 0, name: { first: "torvald", last: "ask" }, title: "director" },
        { id: 1, name: { first: "erik", last: "bjørnøy" }, title: "director" }
    ]
    return (
        <>
            <Material.Grid container size={3} spacing={2}>
                <Material.Grid size="grow"></Material.Grid>
                <Material.Grid container size={6} sx={{ margin: 0, padding: '2em' }}>
                    {
                        members.map(
                            (member) =>
                                <Material.Grid size="grow" display="flex" alignItems="center" justifyContent="center">
                                    <Material.Card elevation={5} sx={{ minWidth: 200, maxWidth: 345, background: 'none' }}>
                                        <Material.CardMedia component="img" height="256" image={`/pictures/employees/${member.id}.png`} alt="TORVALD ASK" />
                                        <Material.CardContent>
                                            <Material.Typography gutterBottom variant="h5" align="center" style={{ textTransform: 'uppercase', color: '#ff2a3a' }}>
                                                {member.name.first} {member.name.last}
                                            </Material.Typography>
                                            <Material.Typography variant="body2" align="center" style={{ textTransform: 'uppercase' }}>
                                                {member.title}
                                            </Material.Typography>
                                        </Material.CardContent>
                                    </Material.Card>
                                </Material.Grid>
                        )
                    }
                </Material.Grid>
                <Material.Grid size="grow"></Material.Grid>
            </Material.Grid>
        </>
    )
};