import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Photographer from './Photographer'
import '../styles/modal-image.css'

type ModalProps = {
  isModalShow: boolean,
  toggleModalShow: (isModalShow: boolean) => void,
  image: any
}

const ImageInfoModal = ({image, isModalShow, toggleModalShow}: ModalProps) => {
  const handleHide = () => {
    toggleModalShow(false)
  }

  const imageStyle = {
    background: `url(${image.urls.regular}) center`,
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
        {/* <img src={image.urls.regular} alt={image.alt_description} key={image.id} /> */}
        <Photographer user={image.user}/>
      </div>
    </Modal>
  );
}

export default ImageInfoModal