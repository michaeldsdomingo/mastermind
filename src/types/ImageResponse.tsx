export type ImagesResponse = {
    data: {
        results: Array<ImageResponse>,
        total: number,
        total_pages?: number
    }
}

export type ImageErrorResponse = {
    response: {
        data: {
            errors: string[]
        }
    }
}

export type SelectedImageResponse = {
    data: ImageResponse
}

export type ImageResponse = {
    alt_description?: string,
    id?: string,
    links?: {
        download: string,
        download_location: string
    },
    urls: {
        full?: string,
        regular?: string,
        small?: string,
    },
    user?: PhotographerType,
    exif: ExifType,

    location?: {
        position: {
            latitude?: number,
            longitude?: number
        }
    }
}

export type ExifType = {
    [index: string]: {aperture:string, 
                        exposure_time: string, 
                        focal_length: string,
                        iso: number,
                        make: string,
                        model: string
                    },
}

export type PhotographerType = {
    name: string,
    profile_image: {
        large: string,
        medium: string,
        small: string,
    }
    username: string,
    links: {
        html: string
    }
}

export type DownloadResponse = {
    data: {
        url: string
    }
}

