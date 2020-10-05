import React from 'react';
import DownloadArrow from './DownloadArrow'
// import {Link} from 'react-router-dom'

type PhotographerProps = {
    user: any
}

const Photographer = ({ user }: PhotographerProps) => {
    
    return (
        <div id="photographer-download-container">
            <div id="photographer-container">
                <img  src={user.profile_image.medium} alt="Photographer's profile of self" id="modal-profile-picture"/>
                <div>
                    <div id="photographer-name">{user.name}</div>
                    <a href={user.links.html} target="_blank" id="photographer-username">@{user.username}</a>
                </div>
            </div>
            <button id="download-button">
                {/* <div id="download-arrow"> */}
                    <DownloadArrow />
                {/* </div> */}
                <div id="download">Download</div>
            </button>

        </div>
    )
    
}

export default Photographer