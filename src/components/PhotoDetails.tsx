import React from 'react';
import Exif from './Exif'
import {ExifType} from '../types/ImageResponse'


type PhotoDetailsProps = {
    exif: ExifType
}

const PhotoDetails = ({ exif }: PhotoDetailsProps) => {
    const mapExifToJSX = (key: string) => {
        return <Exif label={key} value={exif[key]} key={key}/>
    }

    const ExifJSX = Object.keys(exif).map(mapExifToJSX);


    return (
        <div id="photo-details-container">
            {ExifJSX}
        </div>
    )
    
}

export default PhotoDetails;