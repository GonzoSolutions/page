//
// components/feed.tsx
//

import * as Material from '@mui/material';
import * as Lab from '@mui/lab';

//
//

import ReactPlayer from 'react-player';

//
//

import ArticleIcon from '@mui/icons-material/Article';
import VideoIcon from '@mui/icons-material/Movie';

//
//

const FeedItem = ({ key, type, title }: { key: number, type: string, title: string }) => {
    const renderIcon = () => {
        switch(type) {
            case 'article':
                return <ArticleIcon color='primary' />
                break;
            case 'video':
                return <VideoIcon color='primary' />
            default:
                break;
        }
    };
    return (
        <Lab.TimelineItem key={key}>
            <Lab.TimelineSeparator>
                <Lab.TimelineConnector />
                <Lab.TimelineDot>
                    {renderIcon()}
                </Lab.TimelineDot>
                <Lab.TimelineConnector />
            </Lab.TimelineSeparator>
            <Lab.TimelineContent>
                <Material.Paper elevation={5} style={{ padding: '1em' }}>
                    <Material.Typography variant='body2'>
                        {title}
                    </Material.Typography>
                    <Material.Box>
                        <ReactPlayer url='https://www.youtube.com/watch?v=SRcv-zvtEeg' />
                    </Material.Box>
                </Material.Paper>
            </Lab.TimelineContent>
        </Lab.TimelineItem>
    )
}

export default () => {
    /*
    const articles = [
        {
            id: 0, 
            type: 'article', 
            title: "A 3D mixed reality visualization of network topology and activity results in better dyadic cyber team communication and cyber situational awareness",
            author: "Torvald Ask", 
            description: "Cyber defense decision-making is based on human-to-human communication aiming to establish a shared situational awareness. Previous studies suggested that communication inefficiencies were among the biggest problems facing security operation center teams. In this study, we compared how the visual representation of network topology and traffic in 3D mixed reality vs. 2D affected military cyber team performance during a simulated cyber attack.",  
            expanded: false, 
        }, 
        {
            id: 1, 
            type: 'article', 
            title: "The UnCODE system: A neurocentric systems approach for classifying the goals and methods of Cognitive Warfare", 
            author: "Torvald Ask", 
            description: "The recent developments in communication technology and AI combined with recent advancements in brain, cognitive and biological science have resulted in novel methods for targeting humans and other cognitive assets in war. In this paper, presented at the 2023 NATO STO symposium on Mitigating and Responding to Cognitive Warfare, we proposed a novel system for understanding and classifying all the goals and methods of Cognitive Warfare.", 
            expanded: false, 
        }, 
        {
            id: 2, 
            type: 'article', 
            title: "Human-Centric Approach to Cyber Threat Identification: The Role of Cognition, Experience, and Education in Decision-Making", 
            author: "Torvald Ask", 
            description: "Human factors play a critical role in decision-making in the ever-changing field of cybersecurity, especially in the context of identifying cyber threats. This study was conducted during the international red-blue cybersecurity exercises Amber Mist 2022, organized by the Lithuanian Armed Forces. It explores the impact of human factors on cybersecurity, emphasizing how cognitive biases and the blend of knowledge, experience, and education affect complex cyber threat detection.", 
            expanded: false, 
        }, 
        {
            id: 3, 
            type: 'article', 
            title: "Development of A Manufacturing System for Gear Assembly using Collaborative Robots", 
            author: "Torvald Ask", 
            description: "Using robots in manufacturing processes is becoming more and more common. Robots can perform repetitive tasks that are not suitable for humans.  However, using robots in complex assembly tasks can be challenging as narrow spaces and tight fits can cause problems for the robots. This paper presents a case study where two collaborative robots are used to assemble a planetary gear using sensors and cameras.", 
            expanded: false, 
        }
    ];

    const [loading, setLoading ] = React.useState(false);
    const send = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    };
    */

    const items = [
        {
            id: 0, 
            type: 'article', 
            title: "A 3D mixed reality visualization of network topology and activity results in better dyadic cyber team communication and cyber situational awareness",
        }, 
        {
            id: 1, 
            type: 'video', 
            title: 'this is a test video', 
        }, 
        {
            id: 2, 
            type: 'article', 
            title: "The UnCODE system: A neurocentric systems approach for classifying the goals and methods of Cognitive Warfare", 
        }, 
        {
            id: 3, 
            type: 'article', 
            title: "Human-Centric Approach to Cyber Threat Identification: The Role of Cognition, Experience, and Education in Decision-Making", 
        }, 
    ]

    return (
        <Lab.Timeline position='alternate'>
            {
                items.map(item => <FeedItem key={item.id} type={item.type} title={item.title} />)
            }
        </Lab.Timeline>
    )
}