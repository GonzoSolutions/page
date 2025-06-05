//
// pages/research.tsx
//

import * as Material from "@mui/material";

//
//

export default () => {
    const articles = [
        {
            id: 0, 
            title: "A 3D mixed reality visualization of network topology and activity results in better dyadic cyber team communication and cyber situational awareness",
            author: "Torvald Ask", 
            description: "Cyber defense decision-making is based on human-to-human communication aiming to establish a shared situational awareness. Previous studies suggested that communication inefficiencies were among the biggest problems facing security operation center teams. In this study, we compared how the visual representation of network topology and traffic in 3D mixed reality vs. 2D affected military cyber team performance during a simulated cyber attack.",  
            expanded: false, 
        }, 
        {
            id: 1, 
            title: "The UnCODE system: A neurocentric systems approach for classifying the goals and methods of Cognitive Warfare", 
            author: "Torvald Ask", 
            description: "The recent developments in communication technology and AI combined with recent advancements in brain, cognitive and biological science have resulted in novel methods for targeting humans and other cognitive assets in war. In this paper, presented at the 2023 NATO STO symposium on Mitigating and Responding to Cognitive Warfare, we proposed a novel system for understanding and classifying all the goals and methods of Cognitive Warfare.", 
            expanded: false, 
        }, 
        {
            id: 2, 
            title: "Human-Centric Approach to Cyber Threat Identification: The Role of Cognition, Experience, and Education in Decision-Making", 
            author: "Torvald Ask", 
            description: "Human factors play a critical role in decision-making in the ever-changing field of cybersecurity, especially in the context of identifying cyber threats. This study was conducted during the international red-blue cybersecurity exercises Amber Mist 2022, organized by the Lithuanian Armed Forces. It explores the impact of human factors on cybersecurity, emphasizing how cognitive biases and the blend of knowledge, experience, and education affect complex cyber threat detection.", 
            expanded: false, 
        }, 
        {
            id: 3, 
            title: "Development of A Manufacturing System for Gear Assembly using Collaborative Robots", 
            author: "Torvald Ask", 
            description: "Using robots in manufacturing processes is becoming more and more common. Robots can perform repetitive tasks that are not suitable for humans.  However, using robots in complex assembly tasks can be challenging as narrow spaces and tight fits can cause problems for the robots. This paper presents a case study where two collaborative robots are used to assemble a planetary gear using sensors and cameras.", 
            expanded: false, 
        }
    ]

    return (
        <Material.Box>
            <Material.Grid container size={3} id="banner" sx={{ position: 'relative' }}>
                <Material.Grid size="grow"></Material.Grid>
                <Material.Grid size={8}>
                    <Material.Box sx={{ margin: 0, padding: '1em' }}>
                        {
                            articles.map(
                                (article) =>
                                    <Material.Card raised key={article.id} style={{ margin: '1em', padding: 0, background: '#060606' }}>
                                        <Material.CardHeader title={article.title} subheader={article.author} />
                                        <Material.CardMedia component="img" height="256" width="100" src={`/pictures/articles/${article.id}.jpg`} sx={{ height: '256px', objectFit: "cover" }} />
                                        <Material.CardContent>
                                            <Material.Typography variant="body2">
                                                {article.description}
                                            </Material.Typography>
                                        </Material.CardContent>
                                    </Material.Card>
                            )            
                        }
                    </Material.Box>
                </Material.Grid>
                <Material.Grid size="grow"></Material.Grid>
            </Material.Grid>
        </Material.Box>
    )
};