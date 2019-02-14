import React from 'react';

import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) =>{
    const imagesList = props.images.map((item)=> {
        return <ImageCard image={item} key={item.id}/>
    });
    return (
        <div className='image-list'>
            {imagesList}
        </div>
    )
}


export default ImageList;