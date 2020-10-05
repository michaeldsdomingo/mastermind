import React from 'react';

type ImageProps = {
    image: any,
    toggleModalShow: (isModalShow: boolean) => void
}

const Image = ({ image, toggleModalShow } : ImageProps) => {
    const toggleShow = () => {
        toggleModalShow(image);
    }

    return (
        <div>
            <img src={image.urls.small} alt={image.alt_description} key={image.id} onClick={toggleShow}/>
        </div>
    )
    
}

export default Image;