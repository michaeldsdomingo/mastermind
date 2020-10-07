import React from 'react';

type ExifProps = {
    label: string,
    value: any
}

const Exif = ({label, value}: ExifProps) => {
    const formatString = (detail: string) =>  {
        return detail.replace("_", " ").toUpperCase();
    }

    return (
        <div className="exif-container">
            <div className="exif-value purple">{value}</div>
            <div className="exif-label">{formatString(label)}</div>
        </div>
    )
    
}

export default Exif;