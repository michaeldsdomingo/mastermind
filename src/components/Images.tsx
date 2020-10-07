import React from 'react';
import Image from './Image';
import ImageInfoModal from './ImageInfoModal';
import '../styles/form.scss';
import '../styles/images.scss';
import * as unsplash from '../services/imagesService';
import { ImageErrorResponse, ImageResponse, SelectedImageResponse} from '../types/ImageResponse'
import Pagination from "rc-pagination";
// import "rc-pagination/assets/index.css";
// import localeInfo from "rc-pagination/lib/locale/en_US";

type ImagesProps = {
    images: Array<ImageResponse>,
    isModalShow: boolean,
    toggleModalShow: (isModalShow: boolean) => void,
    page: number,
    total: number,
    setPage: (page: number) => void
}

type ImagesState = {
    imagesJSX: Array<React.ReactNode>,
    col1: Array<React.ReactNode>,
    col2: Array<React.ReactNode>,
    col3: Array<React.ReactNode>
    selectedImage: ImageResponse,
    
}

export default class Images extends React.Component<ImagesProps, ImagesState> {
    constructor(props: ImagesProps) {
        super(props)
        this.state = {
            imagesJSX: [],
            col1: [],
            col2: [],
            col3: [],
            selectedImage: {
                                urls: {}, 
                                exif: {},
                                location: {
                                    position: {}
                                },
                                user: undefined
                            },
           
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

    toggleModal = (image: ImageResponse) => {
        unsplash.getImageById(image.id).then(this.onGetImageByIdSuccess).catch(this.onGetImageByIdSuccess)
    }

    onGetImageByIdSuccess = (response: SelectedImageResponse) => {
        console.log(response)
        this.setState(prevState => {
            return {...prevState, selectedImage: response.data}
        })
        this.props.toggleModalShow(true);
    } 

    onGetImageByIdError = (error: ImageErrorResponse) => {
        console.log(error)
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

    mapImagesToJSX = (image: ImageResponse) => <Image image={image} key={image.id} toggleModalShow={this.toggleModal}/>
    
    render() {
        return (
            <>
                <div id="images-container">
                    <div className="column" id="column-1">{this.state.col1}</div>
                    <div className="column" id="column-2">{this.state.col2}</div>
                    <div className="column" id="column-3">{this.state.col3}</div>
                </div>

                
                
                <ImageInfoModal isModalShow={this.props.isModalShow} toggleModalShow={this.props.toggleModalShow} image={this.state.selectedImage}/>
                
            </>
        )
    }
}