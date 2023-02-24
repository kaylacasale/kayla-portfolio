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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import shangooMain from '../assets/shangoo-main.PNG'



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
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
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
                        How does Shangoo work?
                    </Typography>
                    <Typography paragraph>
                        Shangoo is a pharmacy application that puts all
                        your pharmacy needs at the tips of your fingers.
                        Once your doctor sends us your prescription
                        Shangoo will notify you, fill your prescription, and
                        deliver to you usually within 2 hours once your
                        account is setup.
                    </Typography>
                    <Typography paragraph>
                        The only thing you need is to download the
                        Shangoo patient app on your phone. Provide us
                        with your insurance and payment information and
                        we will contact you once we have your
                        prescription.
                    </Typography>
                    <Typography>
                        Most prescriptions are sent electronically to the
                        pharmacy. Ask your doctor to E-prescribe to
                        Shangoo, once received, you will be notified with
                        status updates up until it's delivered to your door.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}