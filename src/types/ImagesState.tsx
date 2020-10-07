import {ImageResponse} from './ImageResponse'

export type ImagesState = {
    imagesArray: ImageResponse[],
    status: string,
    isInProgress: boolean
}
