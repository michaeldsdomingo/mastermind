import React from 'react';
import DownloadArrow from './DownloadArrow'
import {PhotographerType} from '../types/ImageResponse'

// import {Link} from 'react-router-dom'

type PhotographerProps = {
    user?: PhotographerType,
    downloadURL?: string,
}

const Photographer = ({ user, downloadURL }: PhotographerProps) => {
    
    return (
        <div id="photographer-download-container">
            <div id="photographer-container">
                <img  src={user?.profile_image.medium} alt="Photographer's profile of self" id="modal-profile-picture"/>
                <div>
                    <div id="photographer-name">{user?.name}</div>
                    <a href={user?.links.html} target="_blank" id="photographer-username" rel="noopener noreferrer">@{user?.username}</a>
                </div>
            </div>
            <a id="download-button" href={`${downloadURL}?force=true`} rel="nofollow" download="" >
                    <DownloadArrow />
                <div id="download">Download</div>
            </a>

        </div>
    )
    
}

export default Photographer