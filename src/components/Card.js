import React from 'react';

// import CardStyle from '../styles/CardStyle'

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { BsFillHeartFill } from 'react-icons/bs'
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import shangooMain from '../assets/shangoo-main.PNG'
import { BsFillPhoneFill } from 'react-icons/bs'
import { BsLaptopFill } from 'react-icons/bs'
//* react icons:
// https://react-icons.github.io/react-icons/icons?name=bs


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);


    };
    const [liked, setLiked] = React.useState(false)


    const toggle = () => {
        setLiked(!liked)
    };
    return (
        //* do item.map for cards
        <Card sx={{ maxWidth: 345 }} style={{ boxShadow: '1px 2px 9px #CBDCCB', alignSelf: 'center', marginTop: '35px' }}>

            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        K
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shangoo Pharmacy App"
                subheader="August, 2022"
            />
            <CardMedia
                component="img"
                height="194"
                image={shangooMain}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Shangoo works with licensed pharmacies in your area to fill your prescriptions and deliver them to your door. Once your prescriptions are transferred, you can order and manage them in our mobile ap.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={toggle} like={liked}>
                    {liked === false ? (
                        <FavoriteIcon />
                    ) : (
                        <BsFillHeartFill color='red' />
                    )}
                </IconButton>
                <IconButton aria-label="share">
                    <a href="https://apps.apple.com/us/developer/shangoo-inc/id1489129176" target="_blank"> <BsFillPhoneFill /></a>
                </IconButton>
                <IconButton aria-label="share">
                    <a href="https://business.google.com/v/shangoo-pharmacy/01345895416273109405/3a0e/_?caid=17310589579&agid=135624543063&gclid=CjwKCAiAxvGfBhB-EiwAMPakqsLSMwr1FYFX07Na3tSUrjk2yuknATyqfGweKwal1tSvHyXys8ToahoCHFEQAvD_BwE" target="_blank"> <BsLaptopFill /></a>
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>About:</Typography>
                    <Typography paragraph>
                        My contribution?
                    </Typography>
                    <Typography paragraph>
                        Applying a variety of client and server-side programing languages (e.g. PHP, Javascript, HTML, and CSS) to elevate the design and interactivity of Shangoo’s central web application (https://shangoopharmacy.com)
                    </Typography>
                    <Typography paragraph>
                        Utilize Joomla content management system and developer portals such as Expo and Nulab to streamline project management and communicate changes that should be reflected on the mobile app to the lead softwate engineer and design director
                    </Typography>
                    <Typography>
                        Working knowledge of strategizing deployment and adhering to Google Play’s style guidelines in order to gain approval for launching three native IOS and Android applications (for pharmacists, users, and drivers) and Google Store’s location services
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}