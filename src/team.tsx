//
// team.tsx
//

import * as Material from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import LaunchIcon from '@mui/icons-material/Launch';

//
//

export default function Team() {
    const members = [
        { id: 0, name: { first: "torvald", last: "ask" }, title: "CEO" },
        { id: 1, name: { first: "erik", last: "bjørnøy" }, title: "CTO" }, 
        //{ id: 2, name: { first: "adolf", last: "hitler" }, title: "CFO" },
    ]
    return (
        <>
            <Material.Grid container size={3} spacing={2}>
                <Material.Grid size="grow">
                </Material.Grid>

                <Material.Grid container spacing={2} sx={{ margin: 0, padding: '1em' }}>
                    {
                        members.map(
                            (member) =>
                                <Material.Grid key={member.id} size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                                    <Material.Card elevation={5} sx={{ position: 'relative', background: '#060606', borderRadius: 0 }}>
                                        <Material.Box component="a" href={`https://linkedin.com/in/${member.name.first}-${member.name.last}`}>
                                            <Material.Box sx={{ position: 'relative' }}>
                                                <Material.CardMedia component="img" height="256" image={`/pictures/employees/${member.id}.png`} alt={member.name.first} />
                                                <Material.Box className="overlay" sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.9)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0,
                                                        transition: 'opacity 250ms',
                                                        '&:hover': {
                                                            opacity: 1
                                                        }
                                                    }}
                                                >
                                                    <LinkedInIcon sx={{ fontSize: '64px', margin: '1em', color: '#ff2a3a' }} />
                                                </Material.Box>
                                            </Material.Box>
                                        </Material.Box>
                                        <Material.CardContent>
                                            <Material.Typography gutterBottom variant="h5" align="center" style={{ textTransform: 'uppercase', color: '#ff2a3a' }}>
                                                {member.name.first} {member.name.last}
                                            </Material.Typography>
                                            <Material.Typography variant="body2" align="center" style={{ textTransform: 'uppercase', color: '#f9f9f9' }}>
                                                {member.title}
                                            </Material.Typography>
                                        </Material.CardContent>
                                    </Material.Card>
                                </Material.Grid>
                        )
                    }
                </Material.Grid>

                <Material.Grid size="grow">
                </Material.Grid>
            </Material.Grid>
        </>
    )
};