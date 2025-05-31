//
// team.tsx
//

import * as Material from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import LaunchIcon from '@mui/icons-material/Launch';

//
//

import "./team.css";

//
//

export default function Team() {
    const members = [
        { id: 0, name: { first: "torvald", last: "ask" }, title: "director" },
        { id: 1, name: { first: "erik", last: "bjørnøy" }, title: "director" }, 
        { id: 0, name: { first: "freak", last: "aleek" }, title: "director" }
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
                                    <Material.Box component="a" href={`https://linkedin.com/in/${member.name.first}-${member.name.last}`}>
                                        <Material.Card elevation={5} sx={{ position: 'relative', minWidth: 200, maxWidth: 345, background: '#060606' }}>
                                            <Material.Box sx={{ position: 'relative' }}>
                                                <Material.CardMedia component="img" height="256" image={`/pictures/employees/${member.id}.png`} alt={member.name.first} />
                                                <Material.Box className="overlay"
                                                    sx={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        height: '100%',
                                                        bgcolor: 'rgba(0, 0, 0, 0.9)',
                                                        color: '#fff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        opacity: 0,
                                                        transition: 'opacity 500ms',
                                                        '&:hover': {
                                                            opacity: 1
                                                        }
                                                    }}
                                                >
                                                    <LinkedInIcon sx={{ fontSize: '64px', margin: '1em', color: '#ff2a3a' }} />
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
                                    </Material.Box>

                                </Material.Grid>
                        )
                    }
                </Material.Grid>
                <Material.Grid size="grow"></Material.Grid>
            </Material.Grid>
        </>
    )
};