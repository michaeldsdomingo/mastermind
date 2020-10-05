import React from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import '../../styles/form.css'
import * as unsplash from '../../services/imagesService';

type ButtonProps = {
    label: string,
    query: string,
    isRedirect: boolean,
    setImages: (images: any) => void
}

type Props = RouteComponentProps<any> & ButtonProps

class Button extends React.Component<Props> {
    getImages = () => {
        unsplash.getImagesBySearch(this.props.query).then(this.onGetImagesSuccess).catch(this.onGetImagesError)
    }

    onGetImagesSuccess = (response: any) => {
        this.props.setImages(response.data.results)
        this.props.history.push("test")
        console.log(response);
    }

    onGetImagesError = (error: any) => {
        console.log(error)
    }

    render() {
        return (
            <button className="button" onClick={this.getImages}>{this.props.label}</button>
        )
    }
}

export default withRouter(Button)