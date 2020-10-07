export const checkExif = (image) => {
    let exifExists = true;
    image.exif && Object.keys(image.exif).forEach((key) => {
      if (!image.exif[key]) exifExists = false;
    })

    return exifExists;
}