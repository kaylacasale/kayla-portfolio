import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function ReactImageListMasonry() {
    return (
        <div>
            <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>

    )
}

const itemData = [
    {
        img: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjNmNTQ4YzI1NjgxZGQ0OTdlMWNhNTdiMWQyMGM4MmQ1ZDc3ODlhMiZjdD1n/5DK2cpXXE8ILNqX9pc/giphy.gif',
        title: 'Blog For Techs - Tech Blog',
        author: '@kaylacasale',
        link: 'https://guarded-headland-91004.herokuapp.com/'
    }
]

export default ReactImageListMasonry