import {ImageResponse} from '../types/ImageResponse'

export type ImageStatus = {
    imagesArray: ImageResponse[],
    status: string,
    isInProgress: boolean
}

