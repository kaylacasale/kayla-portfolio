import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from "@mui/material/IconButton";
import Card from '../components/Card'
// import PortfolioBackground from '../components/PortfolioBackground'
import '../styles/Background.css'
import Background from '../components/Background';
import MovingComponent from 'react-moving-text'

// import BoxShadow from 'react-native-shadow';
// import InfoIcon from "@mui/material/InfoIcon";
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';
// import { Link } from 'react-router-dom';
//* Portfolio  ~ Project List (page)
//* SingleProject ~ Single Project (component)

// const styles = {
//     section: {
//         backgroundColor: 'black'
//     }
// }
// const styles = {
//     boxShadow: '1px 2px 9px #00FFFF',
//     margin: '4em',
//     padding: '1em'
// }
// added style to section, ImageListItem
// const styles = {
//     Background: {
//         color: 'black'
//     }
// }

function Portfolio() {
    return (
        <section style={{ marginTop: '3em', background: `${<Background />}`, fontFamily: 'Cascadia Code' }}>

            <div className='cardEl shadow shadow-info shadow-intensity-lg' style={{ float: "right", marginTop: "3em" }}>
                <div className='title' style={{ boxShadow: '1px 2px 9px #CBDCCB', margin: '1em', textAlign: 'center', fontSize: '32px', color: 'white' }}>
                    <MovingComponent
                        type="blur"
                        duration="1700ms"
                        delay=".5s"
                        direction="alternate"
                        timing="ease-in"
                        iteration="infinite"
                        fillMode="none">
                        Kayla's Portfolio
                    </MovingComponent>
                </div>
                <Card />
            </div>
            <ImageList sx={{ width: 900, height: 850 }} className='shadow-lg'>
                <ImageListItem key="Subheader" cols={2} style={{ boxShadow: '1px 2px 9px #CBDCCB', margin: '1em' }}>
                    <ListSubheader component="div" className='shadow-lg shadow-intensity-lg rounded' >Work</ListSubheader>
                </ImageListItem >
                {itemData.map((item) => (
                    <a href={item.link} target="_blank"><ImageListItem key={item.img} style={{ boxShadow: '1px 2px 9px #CBDCCB', margin: '1em' }}>
                        <img
                            className='rounded'
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            href={item.link}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            className='rounded'
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    {/* <Icon /> */}
                                </IconButton>
                            }
                        />
                    </ImageListItem></a>
                ))}
            </ImageList>

            {/* <Background style={styles.Background}>


            </Background> */}
            {/* <div>
                <Card />
            </div> */}

        </section>
    );
}

const itemData = [
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ5OGM1MGIzNjc0MzAwYzliZDk2OWNmZTU4OWU0NDMyY2UyZjJjNSZjdD1n/emFmKxgQdkMOumVPhf/giphy.gif',
        title: 'Etiquette - Nail Salon Booking',
        author: '@kaylacasale @bharatrai @salmaloum',
        rows: 2,
        cols: 2,
        featured: true,
        link: 'https://etiquette.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
        title: 'Blog For Techs - Tech Blog',
        author: '@kaylacasale',
        link: 'https://guarded-headland-91004.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODMzM2ZlYmMzZTU3MjVhOGE0OThlMTdhOTg0NjE2YzdiYTgyYjY4NSZjdD1n/cqMuhqltXsS7QlGU50/giphy.gif',
        title: `What's the Weather - US Weather Dashboard`,
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/whats-the-weather/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ0OWViNGVhZGIyZjkzNzI4YTVjN2Q4MDgxNDFkZjBiZjM0NWM1YiZjdD1n/OaKJCdN4PbLMUjRFAt/giphy.gif',
        title: 'WAKO - Real-time Real Estate',
        author: '@kaylacasale @williamvoit @ambergreenberg @owengarret',
        cols: 2,
        link: 'https://wvoigt722.github.io/uclaTeamProject/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY4YTgyZGQzZDNmY2ViOGJjMTZlMGExZTgxZTUzNjVhMDBhZTg0YyZjdD1n/548usG7ovvdlAjwGQo/giphy.gif',
        title: 'Gs56thPick - Horse Racing Updates',
        author: '@kaylacasale',
        cols: 2,
        link: 'https://gsbdaypicks.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTY0MmJlY2NiOTZiNjI3YTI1ZmFiNjJmOWRmYmRkM2UzYWZhMjJmZSZjdD1n/3C9NlxmNLEOQ0kbf7j/giphy.gif',
        title: 'Jotter - Note-Taking App',
        author: '@kaylacasale',
        rows: 2,
        cols: 2,
        featured: true,
        link: 'https://jotter-notetakerapp.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRlZDRjZTM1NDFmOWNiZjJhNzdjZDFjNTg2Y2RkNTE2MDg4Y2IzMyZjdD1n/DeaZM3tmUZnUdRZZ27/giphy.gif',
        title: 'My Metro Buddy - Quick & Reliable Metro Data',
        author: '@kaylacasale @williamvoit @ambergreenberg @owengarret',
        link: 'https://metro-buddy.herokuapp.com/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmI4YmQ3YTFmMTM0YWYwYjIxMjliNDczOTQzM2VjYjczZTM4ODJjOCZjdD1n/Nlhf6GgN46IyYgRcuE/giphy.gif',
        title: 'Work Your Schedule - Workday Scheduler',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/work-your-schedule/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWY1NzNlZmM0YTNmYTY3MGJmZWY4NmNkNDAzM2YxYjQ2NjhjMDk1MCZjdD1n/7LzJHaURMv7FzogBtW/giphy.gif',
        title: 'Coding Quiz - Assessment for Developers',
        author: '@kaylacasale',
        rows: 2,
        cols: 2,
        link: 'https://kaylacasale.github.io/code-quiz/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q4ZWNkNDNkM2UzMDYzMTJmN2M5YWFmNTM0ZDI0MGEzNjA0YjNhYSZjdD1n/uEEXByvQixnkNSla4Y/giphy.gif',
        title: 'pA$sWoRd gEuerA+oR - Generate Random Strings',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/generate-password/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBkYzI1Y2NkNTBlMDM2MTQ2YjQ1YjA3YjkyZDc2YzNjZGYwMTdlNiZjdD1n/6JDvCpOmLp1jkElkBb/giphy.gif',
        title: 'Portfolio - Version 1',
        author: '@kaylacasale',
        link: 'https://kaylacasale.github.io/portfolio/'
    },
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2QxMTNmOGM1NDc1ODg5ODUzNjA3NjRjMTczZDRiODdhMjAwMWJjYSZjdD1n/s3bTllyMaDBQI9KW0j/giphy.gif',
        title: 'Horiseon Web App - Refactored',
        author: '@kaylacasale',
        cols: 2,
        link: 'https://kaylacasale.github.io/horiseon-refactor-accessibility/'
    },
];
export default Portfolio

