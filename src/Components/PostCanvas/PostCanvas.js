import React, {useState, useEffect} from 'react';
import './styles.scss';
import Post from "../Post/Post";

export default function PostCanvas({image, saveFunction}) {
    const [trackMouse, setTrackMouse] = useState(false);
    const [canvas, setCanvas] = useState();
    const [zoomFactor, setZoomFactor] = useState(1);
    const [rawPixelOffset, setRawPixelOffset] = useState({x: 0, y: 0});
    const [effectivePixelOffset, setEffectivePixelOffset] = useState({x: 0, y: 0});
    const [rawPixelZoomMargin, setRawPixelZoomMargin] = useState({x: 0, y: 0});
    const [originMouse, setOriginMouse] = useState({x: 0, y: 0});
    const [rawOriginMouse, setRawOriginMouse] = useState({x: 0, y: 0});
    const [rawPointOfFocus, setRawPointOfFocus] = useState({x: 0, y: 0});
    const [previewImageUrl, setPreviewImageUrl] = useState();

    const canvasWidth = 1600;
    const canvasHeight = image && (canvasWidth / (image.width / image.height));

    useEffect(() => {
        if (image) {
            const zoomMarginX = image.width - image.width / zoomFactor;
            const zoomMarginY = image.height - image.height / zoomFactor;
            setRawPixelZoomMargin({
                x: zoomMarginX,
                y: zoomMarginY
            });
            setEffectivePixelOffset({
                x: Math.max(Math.min(rawPixelOffset.x, zoomMarginX / 2), -zoomMarginX / 2),
                y: Math.max(Math.min(rawPixelOffset.y, zoomMarginY / 2), -zoomMarginY / 2)
            })
        }
    }, [zoomFactor, rawPixelOffset, image]);

    useEffect(() => {
        if (image && canvas) {
            const width = image.width - rawPixelZoomMargin.x;
            const height = image.height - rawPixelZoomMargin.y;
            const x = effectivePixelOffset.x + rawPixelZoomMargin.x / 2;
            const y = effectivePixelOffset.y + rawPixelZoomMargin.y / 2;
            const ctx = canvas.getContext('2d');
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            ctx.drawImage(image, x, y, width, height, 0, 0, canvasWidth, canvasHeight);
        }

    }, [canvas, image, effectivePixelOffset, rawPixelZoomMargin, canvasHeight]);

    if (!image) {
        return null;
    }

    function startClick(event) {
        const bounds = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - bounds.left;
        const mouseY = event.clientY - bounds.top;
        setOriginMouse({x: mouseX, y: mouseY});
        setRawOriginMouse({x: rawPixelOffset.x, y: rawPixelOffset.y});
        setTrackMouse(true);
    }

    function duringClick(event) {
        if (trackMouse) {
            const rawPixelScale = canvasWidth / image.width * zoomFactor;
            const bounds = event.currentTarget.getBoundingClientRect();
            const mouseX = event.clientX - bounds.left;
            const mouseY = event.clientY - bounds.top;
            setRawPixelOffset(prev => ({
                x: rawOriginMouse.x + (mouseX - originMouse.x) / rawPixelScale,
                y: rawOriginMouse.y + (mouseY - originMouse.y) / rawPixelScale
            }));
        }
    }

    function endClick(event) {
        if (rawPixelOffset.x === rawOriginMouse.x && rawPixelOffset.y === rawOriginMouse.y) {
            const [imageX, imageY] = canvasToImage(originMouse.x, originMouse.y);
            setRawPixelOffset({x: imageX, y: imageY})
        }
        setTrackMouse(false)
    }

    function zoomImage(event) {
        setZoomFactor(1 + (image.width / canvasWidth - 1) * (event.currentTarget.value / 100));
    }

    function imageToCanvas(x, y) {
        return [
            (canvasWidth / image.width * zoomFactor) * (x - effectivePixelOffset.x) + canvasWidth / 2,
            (canvasHeight / image.height * zoomFactor) * (y - effectivePixelOffset.y) + canvasHeight / 2
        ]
    }

    function canvasToImage(x, y) {
        return [
            effectivePixelOffset.x + (x - canvasWidth / 2) / (canvasWidth / image.width * zoomFactor),
            effectivePixelOffset.y + (y - canvasHeight / 2) / (canvasHeight / image.height * zoomFactor),
        ]
    }

    function setRawPof() {
        setRawPointOfFocus(rawPixelOffset);
    }

    function togglePreviewMode() {
        setPreviewImageUrl(canvas && canvas.toDataURL('image/jpeg'));
    }

    function savePost() {
        const output = {
            localDataUrl: canvas && canvas.toDataURL('image/jpeg'),
            focusLeftPercent: renderedFocalX / canvasWidth * 100,
            focusTopPercent: renderedFocalY / canvasHeight * 100
        };
        saveFunction(output.localDataUrl, output.focusLeftPercent, output.focusTopPercent);
        console.log(output);
    }

    const [renderZoomX, renderZoomY] = imageToCanvas(rawPixelOffset.x, rawPixelOffset.y);
    const [renderedFocalX, renderedFocalY] = imageToCanvas(rawPointOfFocus.x, rawPointOfFocus.y);
    const sliderValueZoomFactorInverse = ((zoomFactor - 1) / (image.width / canvasWidth - 1)) * 100;

    return (
        <>
            <input type="range" min={0} max={100} className="zoom-slider" id="myRange"
                   value={sliderValueZoomFactorInverse} onChange={zoomImage}/>
            <input type={'button'} value={"Set Point of Focus"} onClick={setRawPof}/>
            <input type={'button'} value={"Update Preview"} onClick={togglePreviewMode}/>
            <input type={'button'} value={"Save"} onClick={savePost}/>
            <div className={'post-canvas'} onMouseDown={startClick} onMouseMove={duringClick} onMouseUp={endClick}>
                <svg width={canvasWidth} height={canvasHeight} id={'crosshair'}>
                    <line x1={renderZoomX} y1={renderZoomY + 30} x2={renderZoomX} y2={renderZoomY + 60}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                    <line x1={renderZoomX} y1={renderZoomY - 60} x2={renderZoomX} y2={renderZoomY - 30}
                          style={{stroke: "rgba(0,0,0,0.5)"}}/>
                    <line x1={renderZoomX - 60} y1={renderZoomY} x2={renderZoomX - 30} y2={renderZoomY}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                    <line x1={renderZoomX + 60} y1={renderZoomY} x2={renderZoomX + 30} y2={renderZoomY}
                          style={{stroke: "rgba(0,0,0,0.5)"}}/>

                    <line x1={renderedFocalX} y1={renderedFocalY + 30} x2={renderedFocalX} y2={renderedFocalY + 60}
                          style={{stroke: "rgba(255,0,0,0.5)"}}/>
                    <line x1={renderedFocalX} y1={renderedFocalY - 60} x2={renderedFocalX} y2={renderedFocalY - 30}
                          style={{stroke: "rgba(255,0,0,0.5)"}}/>
                    <line x1={renderedFocalX - 60} y1={renderedFocalY} x2={renderedFocalX - 30} y2={renderedFocalY}
                          style={{stroke: "rgba(255,0,0,0.5)"}}/>
                    <line x1={renderedFocalX + 60} y1={renderedFocalY} x2={renderedFocalX + 30} y2={renderedFocalY}
                          style={{stroke: "rgba(255,0,0,0.5)"}}/>

                    <line x1={canvasWidth / 3} y1={0} x2={canvasWidth / 3} y2={canvasHeight}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                    <line x1={2 * canvasWidth / 3} y1={0} x2={2 * canvasWidth / 3} y2={canvasHeight}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                    <line x1={0} y1={canvasHeight / 3} x2={canvasWidth} y2={canvasHeight / 3}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                    <line x1={0} y1={2 * canvasHeight / 3} x2={canvasWidth} y2={2 * canvasHeight / 3}
                          style={{stroke: "rgba(255,255,255,0.5)"}}/>
                </svg>
                <canvas ref={setCanvas}/>
            </div>
            {previewImageUrl && <Post image={previewImageUrl} focusLeftPercent={renderedFocalX/canvasWidth * 100} focusTopPercent={(renderedFocalY/canvasHeight) * 100}/>}
        </>
    )
}