import React from 'react';
import {ImageResponse} from '../types/ImageResponse'

type ImageProps = {
    image: ImageResponse,
    toggleModalShow: (image: ImageResponse) => void
}

const Image = ({ image, toggleModalShow } : ImageProps) => {
    const toggleShow = () => {
        toggleModalShow(image);
    }

    return (
        <div>
            <img src={image?.urls?.small} alt={image.alt_description} key={image.id} onClick={toggleShow}/>
        </div>
    )
    
}

export default Image;