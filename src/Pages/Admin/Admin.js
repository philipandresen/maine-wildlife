import React, {useState} from 'react';
import './styles.scss';
import EXIF from "exif-js/exif";
import PostCanvas from "../../Components/PostCanvas/PostCanvas";

export default function Admin() {
    const [blob, setBlob] = useState();
    const [image, setImage] = useState();
    const [exifData, setExifData] = useState();

    function handleImage(event) {
        const image = event.target.files[0];
        EXIF.getData(image, () => exifFunction(image));
        console.log(image);
    }

    function exifFunction(image) {
        console.log(image);
        setBlob(URL.createObjectURL(image.exifdata.thumbnail.blob));
        setExifData(image.exifdata);
        const img = new Image();
        img.src = URL.createObjectURL(image);
        img.onload = () => {
            setImage(img);
        }
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
                        <td>{exifData.FocalLength.numerator / exifData.FocalLength.denominator}mm
                            ({exifData.FocalLengthIn35mmFilm}mm DX)
                        </td>
                    </tr>
                    <tr>
                        <td>Exposure Time:</td>
                        <td>{exifData.ExposureTime.numerator / exifData.ExposureTime.denominator} seconds</td>
                    </tr>
                    <tr>
                        <td>ISO:</td>
                        <td>{exifData.ISOSpeedRatings}</td>
                    </tr>
                    <tr>
                        <td>Aperture:</td>
                        <td>f/{exifData.FNumber.numerator / exifData.FNumber.denominator}</td>
                    </tr>
                    </tbody>
                </table>
                }
                    <PostCanvas image={image}/>
                </div>
            </section>
        </>
    )
}