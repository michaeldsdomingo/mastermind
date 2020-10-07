import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Photographer from './Photographer'
import PhotoDetails from './PhotoDetails'
import GMaps from './GMaps'
import {ImageResponse} from '../types/ImageResponse'
import '../styles/modal-image.css'
import {checkExif} from '../services/ExifService'

type ModalProps = {
  isModalShow: boolean,
  toggleModalShow: (isModalShow: boolean) => void,
  image: ImageResponse
}

const ImageInfoModal = ({image, isModalShow, toggleModalShow}: ModalProps) => {
  const [isExif, setIsExif] = useState(false);

  useEffect(() => {
  
    setIsExif(checkExif(image));
  }, [image])

  

  const handleHide = () => {
    toggleModalShow(false)
  }

  const imageStyle = {
    background: `url(${image.urls.regular}) center`
  }

  return (
    <Modal
      show={isModalShow}
      onHide={handleHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div id="modal-content-container">
        <div style={imageStyle} className="modal-image"/>
        {isExif && <PhotoDetails exif={image.exif} /> }
        <Photographer user={image.user} downloadURL={image.links?.download}/>
        {(image.location?.position.latitude && image.location.position.longitude) && <GMaps position={image.location.position}/>}
      </div>
    </Modal>
  );
}

export default ImageInfoModal