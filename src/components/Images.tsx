import React from 'react';
import Image from './Image';
import ImageInfoModal from './ImageInfoModal';
import '../styles/form.css';
import '../styles/images.scss';

type ImagesProps = {
    images: Array<any>,
    isModalShow: boolean,
    toggleModalShow: (isModalShow: boolean) => void
    
}

type ImagesState = {
    imagesJSX: Array<any>,
    col1: Array<any>,
    col2: Array<any>,
    col3: Array<any>
    selectedImage: any
}

export default class Images extends React.Component<ImagesProps, ImagesState> {
    constructor(props: ImagesProps) {
        super(props)
        this.state = {
            imagesJSX: [],
            col1: [],
            col2: [],
            col3: [],
            selectedImage: {urls: {}, },
        }
    }

    componentDidMount() {
        this.setImagesJSXState();
    }

    componentDidUpdate(prevProps: ImagesProps) {
        if (prevProps.images !== this.props.images) {
            this.setImagesJSXState();
        }
    }

    toggleModal = (image: any) => {
        this.setState(prevState => {
            return {...prevState, selectedImage: image}
        })
        this.props.toggleModalShow(true);
    }

    setImagesJSXState = () => {
        const jsxArray = this.props.images.map(this.mapImagesToJSX);
        this.setState(prevState => {
            return {...prevState, 
                    imagesJSX: jsxArray,
                    col1: jsxArray.slice(0,3),
                    col2: jsxArray.slice(3,6),
                    col3: jsxArray.slice(6)}
        });
    }

    mapImagesToJSX = (image: any) => <Image image={image} key={image.id} toggleModalShow={this.toggleModal}/>
    
    render() {
        return (
            <>
                <div id="images-container">
                    <div className="col" id="column-1">{this.state.col1}</div>
                    <div className="col" id="column-2">{this.state.col2}</div>
                    <div className="col" id="column-3">{this.state.col3}</div>
                </div>
                <ImageInfoModal isModalShow={this.props.isModalShow} toggleModalShow={this.props.toggleModalShow} image={this.state.selectedImage}/>
            </>
        )
    }
}