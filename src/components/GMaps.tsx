import React from 'react';

type GMapsProps = {
    position: {
        latitude?: number | undefined,
        longitude?: number | undefined
    },
   
}

const GMaps = ({position}: GMapsProps) => {
    return (
        <div className="maps-container">
            <iframe
                title="Picture Location"
                width="600"
                height="280"
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=${position.latitude},${position.longitude}&zoom=7`} >
            </iframe>
        </div>
    )
    
}

export default GMaps;