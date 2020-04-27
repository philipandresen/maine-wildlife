import React, {useState} from 'react';
import './styles.scss';
import EXIF from "exif-js/exif";
import PostCanvas from "../../Components/PostCanvas/PostCanvas";

export default function Admin() {
    const [blob, setBlob] = useState();
    const [image, setImage] = useState();
    const [exifData, setExifData] = useState();
    const [imageData, setImageData] = useState({});

    function handleImage(event) {
        const image = event.target.files[0];
        EXIF.getData(image, () => exifFunction(image));
        console.log(image);
    }

    function exifFunction(image) {
        console.log(image);
        setImageData((prev) => (
            {
                ...prev,
                focalLength: image.exifdata.FocalLength.numerator / image.exifdata.FocalLength.denominator,
                focalLengthDx: image.exifdata.FocalLengthIn35mmFilm,
                exposureTime: image.exifdata.ExposureTime.numerator / image.exifdata.ExposureTime.denominator,
                iso: image.exifdata.ISOSpeedRatings,
                aperture: image.exifdata.FNumber.numerator / image.exifdata.FNumber.denominator,
                aspectRatio: image.exifdata.PixelXDimension / image.exifdata.PixelYDimension,
                gpsLat: image.exifdata.GPSLatitude[0].valueOf() + image.exifdata.GPSLatitude[1].valueOf()/60,
                gpsLong: image.exifdata.GPSLongitude[0].valueOf() + image.exifdata.GPSLongitude[1].valueOf()/60
            }
        ));
        setExifData(image.exifdata);
        if (image.exifdata.thumbnail && image.exifdata.thumbnail.blob) {
            setBlob(URL.createObjectURL(image.exifdata.thumbnail.blob));
        }
        const img = new Image();
        img.src = URL.createObjectURL(image);
        img.onload = () => {
            setImage(img);
        }
    }

    function savePost(url, left, top) {
        setImageData(prev => ({
            ...prev,
            imageUrl: url,
            left,
            top,
            })
        );
        console.log(imageData);
    }


    return (
        <>
            <section className={'article-page-header'}>
                <div>Admin Portal</div>
                <input type="file" id="img" name="img" onChange={handleImage} accept="image/*"/>
                <img src={blob}/>
                <div>{exifData &&
                <table className={'exif-overlay'}>
                    <tbody>
                    <tr>
                        <td>Focal Length:</td>
                        <td>{imageData.focalLength}mm
                            ({imageData.focalLengthDx}mm DX)
                        </td>
                    </tr>
                    <tr>
                        <td>Exposure Time:</td>
                        <td>{imageData.exposureTime} seconds</td>
                    </tr>
                    <tr>
                        <td>ISO:</td>
                        <td>{imageData.iso}</td>
                    </tr>
                    <tr>
                        <td>Aperture:</td>
                        <td>f/{imageData.aperture}</td>
                    </tr>
                    <tr>
                        <td>Aspect Ratio:</td>
                        <td>{imageData.aspectRatio}</td>
                    </tr>
                    <tr>
                        <td>Lat / Long</td>
                        <td>{imageData.gpsLat} / {imageData.gpsLong}</td>
                    </tr>
                    </tbody>
                </table>
                }
                    <PostCanvas image={image} saveFunction={savePost}/>
                </div>
                {imageData.gpsLat &&
                <iframe
                    width='100%'
                    height='450px'
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyA_CF4F8PTfzico294A8nastF5Wy0cqes0&center=${imageData.gpsLat},-${imageData.gpsLong}&zoom=13&maptype=satellite`} allowFullScreen>
                </iframe>
                }
            </section>
        </>
    )
}