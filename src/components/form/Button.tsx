import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import '../../styles/form.scss'
import * as unsplash from '../../services/imagesService';
import {ImageStatus} from '../../types/ImageStatus'
import {ImagesResponse, ImageErrorResponse} from '../../types/ImageResponse'

type ButtonProps = {
    label: string,
    query: string,
    isRedirect: boolean,
    setImages: (imageStatus: ImageStatus) => void,
    page: number,
    setTotal: (total: number) => void,
}

type Props = RouteComponentProps<string> & ButtonProps

class Button extends React.Component<Props> {
    
    getImages = () => {
        this.props.setImages({imagesArray: [], status: "", isInProgress: true})
        unsplash.getImagesBySearch(this.props.query, this.props.page).then(this.onGetImagesSuccess).catch(this.onGetImagesError)
    }

    onGetImagesSuccess = (response: ImagesResponse) => {
        let status = "";
        if (response.data.results.length > 0) {
            status = "success"
        } else {
            status = "No Images Found"
        }
        this.props.setTotal(response.data.total)
        this.props.setImages({imagesArray: response.data.results, status, isInProgress: false})
        this.props.history.push(`/images/search?query=${this.props.query}`)
        console.log(response);
    }

    onGetImagesError = (error: ImageErrorResponse) => {
        console.log(error)
        this.props.setImages({imagesArray: [], status: error.response.data.errors[0], isInProgress: false})
    }

    render() {
        return (
            <button className="button" onClick={this.getImages}>{this.props.label}</button>
        )
    }
}

export default withRouter(Button)